import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const gdriveId = "1HaWKgpDlv4UNgsHjouldXKxyzSzDqTtt";
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${gdriveId}&confirm=t`;

    const response = await fetch(downloadUrl, { redirect: "follow" });
    if (!response.ok) {
      return new Response(JSON.stringify({ error: "Failed to download from Google Drive" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const videoBlob = await response.blob();

    const { data, error } = await supabase.storage
      .from("videos")
      .upload("company-video.mp4", videoBlob, {
        contentType: "video/mp4",
        upsert: true,
      });

    if (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const { data: urlData } = supabase.storage
      .from("videos")
      .getPublicUrl("company-video.mp4");

    return new Response(JSON.stringify({ success: true, url: urlData.publicUrl, data }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: String(err) }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});

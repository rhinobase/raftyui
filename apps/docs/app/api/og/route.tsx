import { ImageResponse } from "next/og";
// App router includes @vercel/og.
// No need to install it.

export const runtime = "edge";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    // ?title=<title>
    const hasTitle = searchParams.has("title");
    const title = hasTitle ? searchParams.get("title")?.slice(0, 100) : "rafty";

    const width = 1200,
      height = 630;

    return new ImageResponse(
      (
        <div
          style={{
            backgroundColor: "#09090b",
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            backgroundImage:
              "radial-gradient(circle at 25px 25px, #27272a 2%, transparent 0%), radial-gradient(circle at 75px 75px, #27272a 2%, transparent 0%)",
            backgroundSize: "100px 100px",
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              background:
                "linear-gradient(to bottom,rgba(165, 180, 252, 0.2),transparent)",
            }}
          />
          <div style={{ display: "flex", width: 120, height: 120 }}>
            <svg
              aria-hidden="true"
              viewBox="0 0 35 35"
              fill="none"
              width="100%"
              height="100%"
            >
              <g
                fill="none"
                strokeLinejoin="round"
                strokeWidth={2.5}
                stroke="#a5b4fc"
              >
                <path d="M10.308 5L18 17.5 10.308 30 2.615 17.5 10.308 5z" />
                <path d="M18 17.5L10.308 5h15.144l7.933 12.5M18 17.5h15.385L25.452 30H10.308L18 17.5z" />
              </g>
            </svg>
          </div>
          <div
            style={{
              fontSize: 90,
              fontStyle: "normal",
              letterSpacing: "-0.025em",
              color: "transparent",
              whiteSpace: "pre-wrap",
              background: "linear-gradient(to right,#a5b4fc,#7AB8FF)",
              backgroundClip: "text",
            }}
          >
            {title}
          </div>
          <i
            style={{
              color: "white",
              fontSize: 30,
              marginTop: 30,
            }}
          >
            npm i @rafty/ui
          </i>
        </div>
      ),
      {
        width,
        height,
      },
    );
  } catch (e: unknown) {
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}

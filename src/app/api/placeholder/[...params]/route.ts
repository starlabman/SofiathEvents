import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { params: string[] } }
) {
  try {
    const [width, height, color1, color2, ...textParts] = params.params;
    const text = textParts.join('/').replace(/\+/g, ' ');
    
    const w = parseInt(width) || 400;
    const h = parseInt(height) || 300;
    const c1 = color1 || '34C6C2';
    const c2 = color2 || '0F172A';
    
    // Créer un SVG avec gradient
    const svg = `
      <svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style="stop-color:#${c1};stop-opacity:1" />
            <stop offset="100%" style="stop-color:#${c2};stop-opacity:1" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grad)"/>
        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="24" 
              fill="white" text-anchor="middle" dominant-baseline="middle">
          ${text}
        </text>
      </svg>
    `;

    return new NextResponse(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    return new NextResponse('Error generating placeholder', { status: 500 });
  }
}

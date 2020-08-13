#ifdef GL_ES
precision mediump float;
#endif

uniform vec2 resolution;
uniform vec2 mouse;

void main(void)
{
    vec2 st = gl_FragCoord.xy/resolution.xy;
    vec2 mst = gl_FragCoord.xy/mouse.xy;
    gl_FragColor = vec4(mst, 1.0, 1.0);
}
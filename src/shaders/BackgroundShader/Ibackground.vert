attribute vec3 aPosition;

void main()
{
    vec4 posv4 = vec4(aPosition, 1.0);
    posv4.xy = posv4.xy * 2.0 - 1.0;
    
    gl_Position = posv4;
}
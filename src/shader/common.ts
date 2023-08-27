export const common = `
struct VertexOut {
    @builtin(position) position : vec4<f32>
}
  
@vertex
fn vertex_main(@location(0) vertex: vec4<f32>) -> VertexOut
{
    var output : VertexOut;
    output.position = vertex;
    return output;
}
  
@fragment
fn fragment_main(fragData: VertexOut) -> @location(0) vec4<f32>
{
    return vec4<f32>(0.1, 0.1, 0.1, 1.0);
}
`;
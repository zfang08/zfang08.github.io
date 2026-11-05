import{c as e,d as t,g as n,h as r,l as i,u as a}from"./index-CkgYojx9.js";var o=`attribute vec2 a;varying vec2 v;void main(){v=a*.5+.5;gl_Position=vec4(a,0.,1.);}`,s=[[0,.42],[.84,.42],[.95,.55],[1,.55],[1.05,.5],[1.12,.4],[1.22,.28],[1.32,.18],[1.42,.1],[1.55,.05]],c=1.55,l=.513,u=2e5,d=.22,f=.35,p=()=>{let e=`float rhoAt(float r){ float v = ${s[0][1].toFixed(4)};`;for(let t=0;t+1<s.length;t++){let[n]=s[t],[r,i]=s[t+1];e+=` v = mix(v, ${i.toFixed(4)}, clamp((r - ${n.toFixed(4)})/${(r-n).toFixed(4)}, 0., 1.));`}return e+` return v; }`},m=`
const vec3 PAPER = vec3(247./255.);
const float E0 = .9055, E1 = 1.0561; // the fitted soft edge, in disc radii
float blob(vec2 d, vec2 p, vec2 s, float ca, float sa, float lamp){
  vec2 q = d - p; float u = (q.x*ca + q.y*sa)/s.x, w = (-q.x*sa + q.y*ca)/s.y;
  return lamp - u*u - w*w;
}
vec3 painting(vec2 d){
  float re = length(d);
  vec2 u = d/max(re, 1e-4);
  float c1 = u.x, s1 = u.y;
  float c2 = c1*c1 - s1*s1, s2 = 2.*s1*c1;
  float c3 = c2*c1 - s2*s1, s3 = s2*c1 + c2*s1;
  float c4 = c2*c2 - s2*s2, s4 = 2.*s2*c2;
  float x = max(0., re - 1.);
  vec3 col = PAPER;
  col += (vec3(-0.0405,-0.0158,-0.0409) + vec3(0.0143,-0.0092,0.0054)*c1 + vec3(-0.0023,-0.0024,0.0340)*s1 + vec3(-0.0052,0.0002,-0.0231)*c2 + vec3(0.0436,0.0151,0.0578)*s2 + vec3(-0.0115,-0.0186,0.0013)*c3 + vec3(0.0015,-0.0052,0.0204)*s3 + vec3(0.0115,-0.0004,-0.0105)*c4 + vec3(0.0225,-0.0049,0.0067)*s4)*exp(-x/0.0100);
  col += (vec3(-0.0355,-0.0168,-0.1003) + vec3(0.0031,0.0135,-0.0222)*c1 + vec3(0.0116,0.0122,0.0638)*s1 + vec3(-0.0070,-0.0194,-0.0333)*c2 + vec3(0.0307,0.0293,0.0681)*s2 + vec3(0.0220,0.0091,0.0073)*c3 + vec3(0.0105,0.0190,-0.0023)*s3 + vec3(0.0080,-0.0045,-0.0158)*c4 + vec3(-0.0001,0.0026,-0.0110)*s4)*exp(-x/0.0943);
  col += (vec3(-0.0259,-0.0794,-0.0748) + vec3(0.0180,-0.0703,0.0036)*c1 + vec3(0.0537,0.0727,0.0161)*s1 + vec3(0.0240,-0.0060,0.0059)*c2 + vec3(-0.0081,0.0082,-0.0682)*s2 + vec3(-0.0054,-0.0103,-0.0136)*c3 + vec3(-0.0022,0.0021,-0.0082)*s3 + vec3(-0.0038,-0.0024,0.0015)*c4 + vec3(-0.0006,0.0045,-0.0017)*s4)*exp(-x/0.2460);
  if (re < E1) {
    // a weighted average of soft colour blobs (normalised against the largest so nothing underflows)
    float e0 = blob(d, vec2(1.2873,-0.6315), vec2(0.5124,0.3418), 0.8092, 0.5875, 1.0983);
    float e1 = blob(d, vec2(0.4172,-0.2582), vec2(0.2531,0.3793), 0.6719, 0.7406, 1.0985);
    float e2 = blob(d, vec2(-1.0810,0.9678), vec2(0.4237,0.5080), 0.6305, -0.7762, 1.0954);
    float e3 = blob(d, vec2(-0.3735,0.4914), vec2(0.3749,0.2390), 0.8539, 0.5205, -0.8145);
    float e4 = blob(d, vec2(1.0792,-0.8159), vec2(0.3371,0.5747), 0.4942, -0.8694, 1.0984);
    float e5 = blob(d, vec2(0.4215,-0.1328), vec2(0.2314,0.3618), 0.3656, 0.9308, 1.0984);
    float e6 = blob(d, vec2(-0.0162,0.3885), vec2(0.3364,0.2713), 0.9999, 0.0148, 0.1114);
    float e7 = blob(d, vec2(-0.2885,0.4531), vec2(0.2695,0.3506), 0.3519, -0.9361, 0.0633);
    float e8 = blob(d, vec2(0.2308,-0.1910), vec2(0.4155,0.2580), 0.7289, -0.6846, 1.0986);
    float e9 = blob(d, vec2(1.3000,-0.3272), vec2(0.2960,0.6967), 0.8825, -0.4703, -1.2040);
    float e10 = blob(d, vec2(-0.2093,1.2999), vec2(0.8752,0.5567), 0.9625, 0.2712, -1.0317);
    float e11 = blob(d, vec2(0.5422,1.2622), vec2(1.0611,0.6113), 0.9969, 0.0781, -1.1982);
    float e12 = blob(d, vec2(0.7513,-0.4019), vec2(0.5080,0.3270), -0.6666, 0.7454, -1.2040);
    float e13 = blob(d, vec2(0.6433,-1.0152), vec2(0.6283,0.3754), 0.9434, 0.3317, -1.1940);
    float e14 = blob(d, vec2(-0.1625,0.2252), vec2(0.3056,0.1041), -0.6539, -0.7566, -0.7141);
    float e15 = blob(d, vec2(-0.0858,0.3054), vec2(0.4640,0.2686), 0.9626, -0.2709, -1.2040);
    float em = max(max(max(max(e0,e1),max(e2,e3)),max(max(e4,e5),max(e6,e7))),max(max(max(e8,e9),max(e10,e11)),max(max(e12,e13),max(e14,e15))));
    vec3 num = vec3(0.); float den = 0.; float w;
    w = exp(e0 - em); num += w*vec3(0.3839,0.4454,0.6509); den += w;
    w = exp(e1 - em); num += w*vec3(0.2098,0.6981,0.8114); den += w;
    w = exp(e2 - em); num += w*vec3(0.4837,0.6089,0.6957); den += w;
    w = exp(e3 - em); num += w*vec3(0.6404,0.0005,0.5243); den += w;
    w = exp(e4 - em); num += w*vec3(0.5822,0.8036,0.7884); den += w;
    w = exp(e5 - em); num += w*vec3(0.3080,0.4179,0.8082); den += w;
    w = exp(e6 - em); num += w*vec3(1.0000,0.9242,0.8893); den += w;
    w = exp(e7 - em); num += w*vec3(0.0003,0.9165,0.9098); den += w;
    w = exp(e8 - em); num += w*vec3(0.8572,0.8488,0.8786); den += w;
    w = exp(e9 - em); num += w*vec3(0.7575,0.5154,0.6082); den += w;
    w = exp(e10 - em); num += w*vec3(0.4963,0.8562,0.7718); den += w;
    w = exp(e11 - em); num += w*vec3(0.9997,0.8828,0.8925); den += w;
    w = exp(e12 - em); num += w*vec3(1.0000,0.4468,0.2418); den += w;
    w = exp(e13 - em); num += w*vec3(0.8241,0.8845,0.8597); den += w;
    w = exp(e14 - em); num += w*vec3(0.8680,0.8949,0.8591); den += w;
    w = exp(e15 - em); num += w*vec3(1.0000,0.0415,0.7639); den += w;
    col = mix(col, clamp(num/den, 0., 1.), 1. - smoothstep(E0, E1, re));
  }
  return clamp(col, 0., 1.);
}
`,ee=32,h=`
#define NV ${ee}
uniform vec4 u_pl[NV]; // xy, z: push strength, w: deformation (signed: the spring overshoots)
uniform float u_nv;    // points in use
uniform vec4 u_bb;     // the path's bounding box, grown by its reach (disc radii)
uniform vec3 u_df;     // deformation: x width σ, y the parting (gap² per unit weight), z the most any point moves
uniform vec2 u_er;     // how much of its paint the base hands to the dust at the core (x), and the dust's share (y)
uniform vec2 u_hw;     // x: hole radius, y: reach (disc radii)
uniform vec2 u_dd;     // displacement at which the base starts / finishes handing its paint to the dust
uniform float u_ns;    // dust density scale (1, less on very large discs)
uniform float u_t;
const float KCAP = ${d.toFixed(3)}, DUST_MIST = ${f.toFixed(3)};
${p()}
float rho(float r){ return 1. - pow(1. - rhoAt(r), u_ns); }
// the share of the paint carried by dust at rest: the rim only, and only as much as the dust can carry
// there without a grain differing from the paper by more than KCAP (so the average stays the painting)
float phiRest(float r, float m, float rh){
  float f = smoothstep(.86, 1.02, r)*(1. - smoothstep(1.2, 1.42, r));
  float cap = rh*(KCAP/max(m, 1e-4) - 1.)/max(1. - rh, 1e-3);
  return clamp(min(f, cap), 0., 1.);
}
// smoothstep with its derivative
vec2 ssd(float a, float b, float x){ float t = clamp((x - a)/(b - a), 0., 1.); return vec2(t*t*(3. - 2.*t), 6.*t*(1. - t)/(b - a)); }
// slow eddies: the curl of a stream function ψ = A(r)·Σ sin(k r + n θ + ω t + φ) (A and dA/dr given).
// Divergence-free, so the dust slides and breathes without bunching up or tearing.
vec2 curl(vec2 x, float r, vec2 A, float t, float sg){
  float th = sg*atan(x.y, x.x);
  float ps = 0., pr = 0., pt = 0., ph, c;
  ph = 9.*r + 6.*th + .45*t + 0.3;   c = cos(ph); ps += .5*sin(ph);  pr += 4.5*c;  pt += 3.*c;
  ph = 13.*r - 9.*th - .38*t + 2.1;  c = cos(ph); ps += .35*sin(ph); pr += 4.55*c; pt -= 3.15*c;
  ph = 18.*r + 13.*th + .52*t + 4.2; c = cos(ph); ps += .25*sin(ph); pr += 4.5*c;  pt += 3.25*c;
  vec2 er = x/r;
  return (er*(A.x*sg*pt/r) - vec2(-er.y, er.x)*(A.y*ps + A.x*pr))*.15;
}
// the rim's drift, shared by base and dust: small where the painting's own edge is (so its outline
// only breathes, ~1 px), larger out in the halo (~7 px at 1.4 radii); 0 inside
vec2 rimDrift(vec2 x, float r){
  if (r < .86) return vec2(0.);
  return curl(x, r, .006*ssd(.86, 1., r) + .03*ssd(1., 1.4, r), u_t, 1.);
}
// how far the path pushes a point at distance r from it, with hole radius h and reach w:
// r' = sqrt(r² + h²·exp(-r²/w²)). Area-preserving at the centre (a clean hole of radius h with no
// pile-up spike), monotonic while h < w, and nothing left by about 2w.
float hole(float r, float h, float w){ return sqrt(r*r + h*h*exp(-r*r/(w*w))) - r; }
// as a stroke's tail weakens, the base takes its paint back rather than leaving a thin clean scar:
// the wake fades out in opacity as well as in width
float tailFade(float st){ return smoothstep(.06, .45, st); }
// erf, to ~1e-4 (Winitzki), smooth through 0
float erfa(float x){ float x2 = x*x; return sign(x)*sqrt(max(0., 1. - exp(-x2*(1.27324 + .147*x2)/(1. + .147*x2)))); }
bool inBB(vec2 p){ return u_nv > 0. && p.x > u_bb.x && p.y > u_bb.y && p.x < u_bb.z && p.y < u_bb.w; }
// The stroke as a line of gaussian brushes, a(s)·exp(-|p - c(s)|²/σ²), integrated in closed form along
// each piece (a linear in s), so every field below is one smooth sweep with no beads at the joints.
// dr: drag along the motion (the paint is smeared forward and compressed ahead of the finger).
// W: the brush's weight here (a·exp(-n²/σ²) beside a long straight stroke); P: its first moment, so
// P/W is the offset from the curve, blended smoothly wherever pieces overlap.
void deform(vec2 p, out vec2 dr, out vec2 pu, out float W){
  dr = vec2(0.); pu = vec2(0.); W = 0.;
  float s = u_df.x, is = 1./s, h = .5*s*s;
  for (int i = 0; i < NV - 1; i++) {
    if (float(i) >= u_nv - 1.) break;
    vec4 A = u_pl[i], B = u_pl[i + 1];
    vec2 ab = A.xy - B.xy; float L = length(ab);
    if (L < 1e-5 || abs(A.w) + abs(B.w) < 1e-5) continue;
    vec2 T = ab/L, q = p - B.xy;
    float t = dot(q, T); vec2 n = q - T*t;
    float g = exp(-dot(n, n)*is*is);
    if (g < 1e-4) continue;
    float u0 = t*is, u1 = (t - L)*is, e0 = exp(-u0*u0), e1 = exp(-u1*u1);
    float I0 = .8862269*s*(erfa(u0) - erfa(u1));      // ∫ e
    float I1 = h*(e1 - e0);                            // ∫ (t-s) e
    float I2 = h*((t - L)*e1 - t*e0) + h*I0;           // ∫ (t-s)² e
    float k = (A.w - B.w)/L, a0 = B.w + k*t;
    float Ia = a0*I0 - k*I1, Ja = a0*I1 - k*I2;
    dr += T*(g*Ia); pu += (n*Ia + T*Ja)*g; W += g*Ia;
  }
  float k = .5641896*is;
  dr *= k; pu *= k; W *= k;
}
// the paint parts round the finger: a pixel r from the curve shows what was sqrt(r² - c) from it,
// c = h²·W/a_max (the inverse of an area-preserving push of radius h). Monotone in r, so it never folds;
// inside the finger's own track the paint is stretched across rather than torn open. When the spring
// overshoots (c < 0) the paint is drawn back in a little, by a form that stays smooth on the curve.
vec2 parted(vec2 pu, float W){
  if (abs(W) < 1e-6) return vec2(0.);
  vec2 n = pu/W; float r2 = dot(n, n);
  float c = u_df.y*W;
  if (c < 0.) c *= r2/(r2 + .01);
  // (r_src/r)² = a soft max(0, 1 - c/r²), normalised to 1 where c = 0: the edge of the stretched core is
  // a smooth bend, not a crease, and r_src still goes to 0 on the curve, so the two sides meet there
  float y = 1. - c/max(r2, 1e-10);
  return n*(1. - sqrt(.5*(y + sqrt(y*y + .0225))/1.00559));
}
// the base's displacement: drag plus parting, gently limited so crossing strokes never pile up too far
vec2 deformVec(vec2 p){
  vec2 dr, pu; float W;
  deform(p, dr, pu, W);
  vec2 D = dr + parted(pu, W);
  return D*inversesqrt(1. + dot(D, D)/(u_df.z*u_df.z));
}
`,g=`
precision highp float;
varying vec2 v;
uniform vec2 u_res, u_c; uniform float u_R;
${m}
float hash(vec2 p){ vec3 p3=fract(vec3(p.xyx)*.1031); p3+=dot(p3,p3.yzx+33.33); return fract((p3.x+p3.y)*p3.z); }
void main(){
  vec2 d = (vec2(v.x, 1. - v.y)*u_res - u_c)/u_R;
  gl_FragColor = vec4(painting(d) + (hash(gl_FragCoord.xy) - .5)/255., 1.);
}`,_=`
precision highp float;
varying vec2 v;
uniform vec2 u_res, u_c; uniform float u_R;
${h}
void main(){
  vec2 q = (vec2(v.x, 1. - v.y)*u_res - u_c)/u_R;
  float num = 0., den = 1e-12, sw = 0.;
  for (int i = 0; i < NV - 1; i++) {
    if (float(i) >= u_nv - 1.) break;
    vec4 A = u_pl[i], B = u_pl[i + 1];
    vec2 ab = B.xy - A.xy; float L2 = dot(ab, ab);
    float t = L2 > 1e-9 ? clamp(dot(q - A.xy, ab)/L2, 0., 1.) : 0.;
    float st = mix(A.z, B.z, t);
    float dr = hole(length(q - A.xy - ab*t), u_hw.x*st, u_hw.y);
    float w = dr*dr*dr; num += w*dr; den += w; sw += w*st;
  }
  gl_FragColor = vec4(smoothstep(u_dd.x, u_dd.y, num/den)*tailFade(sw/den), 0., 0., 1.);
}`,te=`
precision highp float;
varying vec2 v;
uniform sampler2D u_paint, u_mask; uniform vec2 u_res, u_c; uniform float u_R;
const vec3 PAPER = vec3(247./255.);
const float GRAIN0 = ${3.5.toFixed(2)}, GRAIN1 = ${2.5.toFixed(2)};
float gh(vec2 p){ vec3 p3 = fract(vec3(p.xyx)*vec3(.1031, .1030, .0973)); p3 += dot(p3, p3.yzx + 33.33); return fract((p3.x + p3.y)*p3.z); }
${h}
void main(){
  vec2 d = (vec2(v.x, 1. - v.y)*u_res - u_c)/u_R;
  vec2 uv = v; float phi = 0.;
  // the stroke bends the paint: each pixel shows what the material carried to it
  if (inBB(d)) {
    vec2 o = deformVec(d);
    d -= o;
    uv += vec2(-o.x, o.y)*u_R/u_res;
  }
  float r = length(d);
  vec3 D;
  if (r > .85 && r < 1.66) {
    vec2 o = rimDrift(d, r);
    d -= o; r = length(d);
    uv += vec2(-o.x, o.y)*u_R/u_res;
    D = texture2D(u_paint, uv).rgb - PAPER;
    phi = phiRest(r, max(max(abs(D.r), abs(D.g)), abs(D.b)), rho(r));
  } else {
    D = texture2D(u_paint, uv).rgb - PAPER;
  }
  phi = 1. - (1. - phi)*(1. - u_er.x*texture2D(u_mask, v).r);
  vec3 col = PAPER + D*(1. - phi);
  // film grain: static, one value per device px, high-passed white noise (so it reads fine, not
  // blotchy), ~1/255 on the halo, a little more where the paint is rich, gone on the plain paper
  float gw = 1. - smoothstep(1.15, 1.6, r);
  if (gw > 0.) {
    vec2 p = gl_FragCoord.xy;
    float n = gh(p) - .25*(gh(p + vec2(1., 0.)) + gh(p - vec2(1., 0.)) + gh(p + vec2(0., 1.)) + gh(p - vec2(0., 1.)));
    float m = max(max(abs(D.r), abs(D.g)), abs(D.b));
    col += n*gw*(GRAIN0 + GRAIN1*min(1., m*2.5))/255.;
  }
  gl_FragColor = vec4(col, 1.);
}`,ne=`
precision highp float;
attribute vec2 a_pos;   // rest position, disc radii, y down
attribute vec4 a_seed;  // four uniform randoms per grain
uniform vec2 u_res, u_c; uniform float u_R, u_dpr;
varying vec3 v_col; varying float v_a, v_rad, v_size;
${m}
${h}
void main(){
  vec2 x0 = a_pos; float r0 = length(x0); vec4 s = a_seed;
  vec2 x = x0; float phiP = 0.;
  if (inBB(x0)) {
    float k = .55 + .9*s.x;                  // how far this grain is thrown
    float gam = .75 + .9*s.y;                // and how early it comes home
    float an = 6.2832*s.w;
    vec2 bias = .045*vec2(cos(an), sin(an)); // a grain right on the path picks its own side
    vec3 acc = vec3(0.); float wk = 1e-12, n1 = 0., w1 = 1e-12, sw = 0.;
    for (int i = 0; i < NV - 1; i++) {
      if (float(i) >= u_nv - 1.) break;
      vec4 A = u_pl[i], B = u_pl[i + 1];
      vec2 ab = B.xy - A.xy; float L2 = dot(ab, ab);
      float t = L2 > 1e-9 ? clamp(dot(x0 - A.xy, ab)/L2, 0., 1.) : 0.;
      vec2 n = x0 - A.xy - ab*t; float r = length(n);
      float st = mix(A.z, B.z, t);
      float dk = hole(r, u_hw.x*k*pow(st, gam), u_hw.y);
      float d1 = hole(r, u_hw.x*st, u_hw.y);
      vec2 nb = n + bias;
      float w = dk*dk*dk; acc += w*vec3(nb/max(length(nb), 1e-6)*dk, dk); wk += w;
      w = d1*d1*d1; n1 += w*d1; w1 += w; sw += w*st;
    }
    acc /= wk;
    vec2 dir = acc.xy/max(acc.z, 1e-6);
    float a2 = an + u_t*(s.z - .5)*.8;
    // away from the path, a little round it, and a little scattered
    x += acc.xy + vec2(-dir.y, dir.x)*acc.z*(s.z - .35)*.55 + acc.z*.3*vec2(cos(a2), sin(a2));
    // carried with the material, and the loose grains thrown further along the sweep than the paint goes
    // (the parting is the hole push above, which the grains already have)
    vec2 dr, pu; float W;
    deform(x0, dr, pu, W);
    x += dr*inversesqrt(1. + dot(dr, dr)/(u_df.z*u_df.z));
    float fl = length(dr);
    x += dr/max(fl, 1e-6)*smoothstep(0., .02, fl)*acc.z*(.2 + 1.1*s.y*s.y);
    phiP = smoothstep(u_dd.x, u_dd.y, n1/w1)*tailFade(sw/w1);
  }
  if (r0 < .85 && phiP <= 0.) { gl_Position = vec4(2., 2., 2., 1.); gl_PointSize = 0.; return; }
  vec3 D = painting(x0) - PAPER;
  float m = max(max(abs(D.r), abs(D.g)), abs(D.b));
  float rh = rho(r0);
  float phi = 1. - (1. - phiRest(r0, m, rh))*(1. - u_er.y*phiP);
  if (phi < .004) { gl_Position = vec4(2., 2., 2., 1.); gl_PointSize = 0.; return; }
  // strong enough that, at this density, base + dust average back to the painting
  // (scattered grains may be a little richer than that, so a dispersed patch thins rather than bleaches)
  float g = clamp(1. + phi*(1. - rh)/rh, 1., max(1. + .3*phiP, KCAP/max(m, 1e-4)));
  v_col = clamp(PAPER + D*g, 0., 1.);
  // the rim's drift, each grain's own small wander, and now and then a trip outward and back
  x += rimDrift(x0, r0);
  // the dust alone moves more at the boundary, where the base no longer shows (another curl, so still
  // no clumping): ~3 px/s there
  if (r0 > .94) x += curl(x0, r0, .016*ssd(.94, 1.06, r0), u_t*1.7 + 23., -1.);
  float A = .016*smoothstep(.86, 1.08, r0);
  x += A*.3*vec2(sin(u_t*(.5 + .6*s.x) + 6.2832*s.y), sin(u_t*(.5 + .6*s.y) + 6.2832*s.z));
  if (s.z > .93 && r0 > .97) x += x0/r0*(.03 + .05*s.y)*pow(max(0., sin(6.2832*(u_t/(12. + 8.*s.x) + s.w))), 4.);
  vec2 pix = u_c + x*u_R;
  gl_Position = vec4(pix.x/u_res.x*2. - 1., 1. - pix.y/u_res.y*2., 0., 1.);
  float rad = .5*(.6 + .4*fract(s.x*7.31 + s.y*3.71))*u_dpr; // 0.6–1 CSS px across, in device px
  // drawn with a 1 px AA ramp at no less than a 1 px disc; alpha gives back the true area, so a
  // sub-pixel grain is a faint, crisp dot rather than a blurred one
  float re = max(rad, .5);
  v_rad = re;
  v_size = ceil(2.*re + 2.);
  // scattered grains go fainter: a dispersed patch reads as a fine mist, not as specks
  v_a = rad*rad/(re*re + 1./12.)*(1. - DUST_MIST*phiP);
  gl_PointSize = v_size;
}`,re=`
precision mediump float;
varying vec3 v_col; varying float v_a, v_rad, v_size;
void main(){
  vec2 q = (gl_PointCoord - .5)*v_size;
  float c = clamp(v_rad + .5 - length(q), 0., 1.)*v_a;
  if (c <= 0.) discard;
  gl_FragColor = vec4(v_col*c, c);
}`,ie=.14,ae=.4,oe=3,se=12,ce=.09,le=.55,ue=.07,de=.35,v=40,fe=.004,pe=192,me=.24,y=.24,he=.6,ge=.12,_e=.3,b=.55,x=4.6,ve=.12,ye=.65,S=x*Math.sqrt(1-b*b),be=e=>Math.exp(-.55*x*e)*(Math.cos(S*e)+b*x/S*Math.sin(S*e)),C=e=>()=>{e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296},w=e=>{let t=s[0][1];for(let n=0;n+1<s.length;n++){let[r]=s[n],[i,a]=s[n+1];t+=(a-t)*Math.min(1,Math.max(0,(e-r)/(i-r)))}return t};function xe(e){let t=(t,n)=>-Math.log(1-w(t))*n*e*e/l,n=0;for(let e=5e-4;e<c;e+=.001)n+=t(e,1)*2*Math.PI*e*.001;let r=Math.min(1,u/n),i=C(24301),a=[],o=[],s=.5/Math.sqrt(t(0,r));for(;s<c;){let e=1/Math.sqrt(t(s,r)),n=Math.max(1,Math.round(2*Math.PI*s/e)),c=i()*2*Math.PI;for(let t=0;t<n;t++){let r=c+(t+.5+(i()-.5)*.9)/n*2*Math.PI,l=s+(i()-.5)*.9*e;a.push(l*Math.cos(r),l*Math.sin(r)),o.push(i()*256|0,i()*256|0,i()*256|0,i()*256|0)}s+=e}return{pos:new Float32Array(a),seed:new Uint8Array(o),n:a.length/2,ns:r}}function T({palette:e=`dusk`,className:t,children:i}){let s=n(null),c=n(null);return r(()=>{let e=s.current,t=c.current;if(!e||!t)return;let n=t.getContext(`webgl`,{antialias:!1,alpha:!1,preserveDrawingBuffer:!1});if(!n)return;let r=window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,i=(e,t)=>{let r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),n.getShaderParameter(r,n.COMPILE_STATUS)||console.warn(n.getShaderInfoLog(r)),r},a=(e,t)=>{let r=n.createProgram();return n.attachShader(r,i(n.VERTEX_SHADER,e)),n.attachShader(r,i(n.FRAGMENT_SHADER,t)),n.bindAttribLocation(r,0,e===o?`a`:`a_pos`),n.linkProgram(r),r},l=a(o,g),u=a(o,_),d=a(o,te),f=a(ne,re),p=(e,t)=>n.getUniformLocation(e,t),m=n.getAttribLocation(f,`a_seed`),h=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,h),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),n.STATIC_DRAW);let b=n.createBuffer(),x=n.createBuffer(),S=()=>{let e=n.createTexture(),t=n.createFramebuffer(),r=0,i=0;return{tex:e,fbo:t,get w(){return r},get h(){return i},size(a,o){r=Math.max(1,a),i=Math.max(1,o),n.bindTexture(n.TEXTURE_2D,e),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,r,i,0,n.RGBA,n.UNSIGNED_BYTE,null),n.bindFramebuffer(n.FRAMEBUFFER,t),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,e,0),n.clearColor(0,0,0,1),n.clear(n.COLOR_BUFFER_BIT),n.bindFramebuffer(n.FRAMEBUFFER,null)}}},C=S(),w=S(),T=!0,E=!1,D=1,O=0,k=0,A=1,j=1,Se=0,Ce=1,M=0,N=!1,P=0,F=0,we=-1e9,I=0,L=0,R=0,z=0,B=0,V=0,H=0,U=0,W=0,Te=!0,G=[],K=new Float32Array(128),q=[],J=0,Y=[0,0,0,0],X=t=>{let n=e.getBoundingClientRect(),r=((t.clientX-n.left)*D-O)/A,i=((t.clientY-n.top)*D-k)/A,a=performance.now()/1e3;if(!N||Math.hypot(r-P,i-F)>.6){let e=G[0];e&&G.unshift([e[0],e[1],0,a,0]),G.unshift([r,i,0,a,0]),z=r,B=i,Te=!0}P=r,F=i,N=!0,we=a},Ee=()=>{N=!1},Z=0,De=!0,Q=performance.now()/1e3,Oe=Q,ke=()=>{D=Math.min(2,window.devicePixelRatio||1);let r=e.clientWidth,i=e.clientHeight,a=Math.round(r*D),o=Math.round(i*D);(t.width!==a||t.height!==o)&&(t.width=a,t.height=o);let s=a/Math.max(1,o),c=Math.min(1,Math.max(0,(s-.7)/.7)),l=c*c*(3-2*c);if(O=((.5+.16*l)*s-.003)*o,k=.493*o,A=(.249+.038*l)*o,j=A/D,!M||Math.abs(j-M)/M>.08){let e=xe(j);n.bindBuffer(n.ARRAY_BUFFER,b),n.bufferData(n.ARRAY_BUFFER,e.pos,n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,x),n.bufferData(n.ARRAY_BUFFER,e.seed,n.STATIC_DRAW),Se=e.n,Ce=e.ns,M=j}C.size(r,i),w.size(Math.ceil(r/2),Math.ceil(i/2)),T=!0,Me()},Ae=(e,t,n,r)=>e+(t-e)*(1-Math.exp(-n/r)),je=()=>{let e=performance.now()/1e3,t=Math.min(.1,e-Q);if(Q=e,t<=0)return;let n=N&&e-we<de?1:0;I=Ae(I,n,t,n>I?ce:le),L=Ae(L,I,t,ue),R=Ae(R,Math.hypot(P-z,F-B)/t,t,.12),z=P,B=F;let r=Math.min(1,Math.max(0,(R-.5)/3.5)),i=L*(1+.25*r*r*(3-2*r)),a=Math.min(1,Math.max(0,(R-.3)/3.7)),o=L*y*(he+.4*a*a*(3-2*a));if(Te)V=P,H=F,U=W=0,Te=!1;else{let e=Math.exp(-40*t),n=V-P,r=H-F,i=(U+v*n)*t,a=(W+v*r)*t;U=(U-v*i)*e,W=(W-v*a)*e,V=P+(n+i)*e,H=F+(r+a)*e}let s=G[0];if(N){let t=s?Math.hypot(V-s[0],H-s[1]):1;s&&t<fe?(s[2]=i,s[3]=e,s[4]=o):G.unshift([V,H,i,e,o])}let c=t=>t[2]*Math.exp(-(e-t[3])/le),l=t=>t[4]*be(e-t[3]);for(;G.length&&(G.length>pe||c(G[G.length-1])<.004);)G.pop();if(J=0,!G.length||!(i>.002||c(G[0])>.004))return;let u=[[V,H,i,o]];for(let e of G){let t=u[u.length-1];Math.hypot(e[0]-t[0],e[1]-t[1])>1e-5?u.push([e[0],e[1],c(e),l(e)]):t[2]=Math.max(t[2],c(e))}q.length=0;let d=(e,t,n,r)=>{let i=q.length,a=0;if(i){let o=Math.hypot(e-q[i-5],t-q[i-4]);a=q[i-1]+o*(.15+.5*(n+q[i-3])+2/y*Math.abs(r))}q.push(e,t,n,r,a)};d(u[0][0],u[0][1],u[0][2],u[0][3]);let f=u.length;for(let e=0;e+1<f;e++){let t=u[Math.max(0,e-1)],n=u[e],r=u[e+1],i=u[Math.min(f-1,e+2)],a=Math.hypot(r[0]-n[0],r[1]-n[1]),o=Math.min(8,Math.max(1,Math.ceil(a/.012))),s=0+Math.max(1e-4,Math.sqrt(Math.hypot(n[0]-t[0],n[1]-t[1]))),c=s+Math.max(1e-4,Math.sqrt(a)),l=c+Math.max(1e-4,Math.sqrt(Math.hypot(i[0]-r[0],i[1]-r[1])));for(let e=1;e<=o;e++){let a=e/o,u=s+(c-s)*a,f=[0,0];for(let e=0;e<2;e++){let a=((s-u)*t[e]+(u-0)*n[e])/(s-0),o=((c-u)*n[e]+(u-s)*r[e])/(c-s),d=((l-u)*r[e]+(u-c)*i[e])/(l-c),p=((c-u)*a+(u-0)*o)/(c-0),m=((l-u)*o+(u-s)*d)/(l-s);f[e]=((c-u)*p+(u-s)*m)/(c-s)}d(f[0],f[1],n[2]+(r[2]-n[2])*a,n[3]+(r[3]-n[3])*a)}}let p=q.length/5,m=q[q.length-1],h=Math.min(ee,p),g=0;for(let e=0;e<h;e++){let t=4*e;if(h===p)for(let n=0;n<4;n++)K[t+n]=q[5*e+n];else{let n=m*e/(h-1);for(;g<p-2&&q[5*(g+1)+4]<n;)g++;let r=q[5*g+4],i=q[5*(g+1)+4],a=i>r?Math.min(1,Math.max(0,(n-r)/(i-r))):0;for(let e=0;e<4;e++)K[t+e]=q[5*g+e]+(q[5*g+5+e]-q[5*g+e])*a}let n=K[t],r=K[t+1];e||(Y[0]=Y[2]=n,Y[1]=Y[3]=r),Y[0]=Math.min(Y[0],n),Y[1]=Math.min(Y[1],r),Y[2]=Math.max(Y[2],n),Y[3]=Math.max(Y[3],r)}if(J=h,J===1){for(let e=0;e<4;e++)K[4+e]=K[e];J=2}let _=2.2*ae;Y[0]-=_,Y[1]-=_,Y[2]+=_,Y[3]+=_},$=(e,r)=>{n.uniform4fv(p(e,`u_pl`),K),n.uniform1f(p(e,`u_nv`),J),n.uniform4f(p(e,`u_bb`),Y[0],Y[1],Y[2],Y[3]),n.uniform3f(p(e,`u_df`),me,ge*ge/y,_e),n.uniform2f(p(e,`u_er`),ve,ye),n.uniform2f(p(e,`u_hw`),ie,ae),n.uniform2f(p(e,`u_dd`),oe/j,se/j),n.uniform1f(p(e,`u_ns`),Ce),n.uniform1f(p(e,`u_t`),r),n.uniform2f(p(e,`u_res`),t.width,t.height),n.uniform2f(p(e,`u_c`),O,k),n.uniform1f(p(e,`u_R`),A)},Me=()=>{let e=r?0:performance.now()/1e3-Oe;if(n.disable(n.BLEND),n.bindBuffer(n.ARRAY_BUFFER,h),n.enableVertexAttribArray(0),n.vertexAttribPointer(0,2,n.FLOAT,!1,0,0),m>=0&&n.disableVertexAttribArray(m),T&&=(n.useProgram(l),$(l,e),n.bindFramebuffer(n.FRAMEBUFFER,C.fbo),n.viewport(0,0,C.w,C.h),n.drawArrays(n.TRIANGLES,0,3),!1),(J||E)&&(n.bindFramebuffer(n.FRAMEBUFFER,w.fbo),n.viewport(0,0,w.w,w.h),n.clearColor(0,0,0,1),n.clear(n.COLOR_BUFFER_BIT),E=!1,J)){let r=w.w/t.width,i=w.h/t.height,a=Math.max(0,Math.floor((O+Y[0]*A)*r)-1),o=Math.min(w.w,Math.ceil((O+Y[2]*A)*r)+1),s=Math.max(0,Math.floor(w.h-(k+Y[3]*A)*i)-1),c=Math.min(w.h,Math.ceil(w.h-(k+Y[1]*A)*i)+1);o>a&&c>s&&(n.enable(n.SCISSOR_TEST),n.scissor(a,s,o-a,c-s),n.useProgram(u),$(u,e),n.drawArrays(n.TRIANGLES,0,3),n.disable(n.SCISSOR_TEST)),E=!0}n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,t.width,t.height),n.useProgram(d),$(d,e),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,C.tex),n.uniform1i(p(d,`u_paint`),0),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,w.tex),n.uniform1i(p(d,`u_mask`),1),n.drawArrays(n.TRIANGLES,0,3),n.useProgram(f),$(f,e),n.uniform1f(p(f,`u_dpr`),D),n.bindBuffer(n.ARRAY_BUFFER,b),n.vertexAttribPointer(0,2,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,x),n.enableVertexAttribArray(m),n.vertexAttribPointer(m,4,n.UNSIGNED_BYTE,!0,0,0),n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE_MINUS_SRC_ALPHA),n.drawArrays(n.POINTS,0,Se)},Ne=()=>{je(),Me(),Z=De&&!r?requestAnimationFrame(Ne):0},Pe=new IntersectionObserver(([e])=>{De=!!e?.isIntersecting,De&&!Z&&!r&&(Q=performance.now()/1e3,Z=requestAnimationFrame(Ne))});ke();let Fe=new ResizeObserver(ke);return Fe.observe(e),Pe.observe(e),r||(e.addEventListener(`pointermove`,X),e.addEventListener(`pointerdown`,X),e.addEventListener(`pointerleave`,Ee),Z=requestAnimationFrame(Ne)),()=>{Fe.disconnect(),Pe.disconnect(),e.removeEventListener(`pointermove`,X),e.removeEventListener(`pointerdown`,X),e.removeEventListener(`pointerleave`,Ee),cancelAnimationFrame(Z),n.getExtension(`WEBGL_lose_context`)?.loseContext()}},[e]),a(`div`,{ref:s,className:`field ${t??``}`,"data-palette":e,children:[a(`canvas`,{ref:c,className:`field-canvas`,"aria-hidden":`true`}),a(`div`,{className:`field-content`,children:i})]})}function E(){return e(`About`),a(`main`,{className:`page`,id:`main`,children:a(T,{palette:`dusk`,className:`about-field`,children:a(`div`,{className:`wrap about-grid`,children:[a(`h1`,{className:`visually-hidden`,children:`About`}),a(`div`,{className:`about-bio`,children:[a(`p`,{children:`I’m Zheng Fang, a software engineer in the Bay Area. I build full-stack products end to end: React interfaces, services in Python, Java and Go, data in PostgreSQL and Elasticsearch, deployed on GCP and AWS.`}),a(`p`,{children:`Recently I’ve built retrieval pipelines and LLM agents with RAG and an MCP server, a social app with a Go backend and full-text search, and an ordering system on Spring Boot. Before that I was a Research Associate at Harvard, where I built a computer vision pipeline over 49,740 street-view images and modeled the results with machine learning.`}),a(`p`,{children:`I hold a master’s from Harvard, focused on computation, and have three first-author papers in smart cities, applied ML and computational geometry. I like owning a feature from the schema to the last interaction, and I care that what I ship is correct, fast and easy to use.`}),a(`p`,{className:`small muted about-where`,children:`Fremont, CA`}),a(`ul`,{className:`links small about-links`,children:[a(`li`,{children:a(i,{})}),a(`li`,{children:a(`a`,{href:t.resume,children:`Resume`})}),a(`li`,{children:a(`a`,{href:t.github,children:`GitHub`})}),a(`li`,{children:a(`a`,{href:t.linkedin,children:`LinkedIn`})})]})]})]})})})}export{E as About};
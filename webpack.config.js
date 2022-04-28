const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");

module.exports = ({ production }) => ({
  entry: {
    app: "./src/main.tsx",
  },
  mode: production ? "production" : "development",
  output: {
    path: path.join(__dirname, "public"),
    filename: production ? "[name].[hash].js" : "[name].js",
  },
  plugins: [
    new HtmlPlugin({
      templateContent: `
        <html>
          <head>
            <style>
            .j7z3w8v {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: transparent;
}
.aejv8yq {
  --outer-stroke-color: transparent;
}
.frfllj1 {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #426da9;
}
.ykmh28 {
  --outer-stroke-color: #426da9;
}
.ox4ua6 {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #1d4f91;
}
.ixzx4b {
  --outer-stroke-color: #1d4f91;
}
.lbq1vp {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #123f7a;
}
.dyn3tu {
  --outer-stroke-color: #123f7a;
}
.g290zx2 {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: transparent;
}
.eunu4n {
  --outer-stroke-color: transparent;
}
.rqzwzjb {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #d6d6d6;
}
.biq80t {
  --outer-stroke-color: transparent;
}
.e5ofwi {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #426da9;
}
.xxl9wf {
  --outer-stroke-color: #426da9;
}
.zyip69f {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #1d4f91;
}
.e5p1a1i {
  --outer-stroke-color: #1d4f91;
}
.f8wkkm {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #123f7a;
}
.vgujk3 {
  --outer-stroke-color: #123f7a;
}
.kftbn18 {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #d6d6d6;
}
.wta76zc {
  --outer-stroke-color: transparent;
}
.prrmn4h {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #8c8c8c;
}
.puy5su {
  --outer-stroke-color: transparent;
}
.kux4g3 {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #426da9;
}
.quxxi8 {
  --outer-stroke-color: #426da9;
}
.sftghpu {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #1d4f91;
}
.l9romfp {
  --outer-stroke-color: #1d4f91;
}
.qqh9mt {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #123f7a;
}
.ens52ou {
  --outer-stroke-color: #123f7a;
}
.hvy3d4 {
  background-color: #f6f6f6;
  color: #333333;
  --inner-stroke-color: #8c8c8c;
}
.lay1fp5 {
  --outer-stroke-color: transparent;
}
.mihxst {
  background-color: #E6EFFB;
  color: #333333;
  --inner-stroke-color: #426da9;
}
.f25i2u7 {
  --outer-stroke-color: transparent;
}
.opu2gk {
  background-color: #E6EFFB;
  color: #333333;
  --inner-stroke-color: #426da9;
}
.f6d03od {
  --outer-stroke-color: #426da9;
}
.pbyjjpd {
  background-color: #E6EFFB;
  color: #333333;
  --inner-stroke-color: #1d4f91;
}
.glzmnma {
  --outer-stroke-color: #1d4f91;
}
.cye974 {
  background-color: #E6EFFB;
  color: #333333;
  --inner-stroke-color: #123f7a;
}
.nk88hr {
  --outer-stroke-color: #123f7a;
}
.lje5tlp {
  background-color: #E6EFFB;
  color: #333333;
  --inner-stroke-color: #8c8c8c;
}
.aqyo7to {
  --outer-stroke-color: transparent;
}
.pqcgwj {
  background-color: transparent;
  color: #426da9;
  --inner-stroke-color: transparent;
}
.o2rb3x {
  --outer-stroke-color: transparent;
}
.i55f846 {
  background-color: transparent;
  color: #426da9;
  --inner-stroke-color: transparent;
}
.vig20v {
  --outer-stroke-color: #426da9;
}
.o7chjb {
  background-color: transparent;
  color: #1d4f91;
  --inner-stroke-color: transparent;
}
.fvti2y {
  --outer-stroke-color: #1d4f91;
}
.dupc75 {
  background-color: #E6EFFB;
  color: #123f7a;
  --inner-stroke-color: transparent;
}
.z9vrsd9 {
  --outer-stroke-color: #123f7a;
}
.vhiq4b {
  background-color: transparent;
  color: #8c8c8c;
  --inner-stroke-color: transparent;
}
.gt66tk {
  --outer-stroke-color: transparent;
}
.tcf1v5 {
  background-color: #E6EFFB;
  color: #426da9;
  --inner-stroke-color: transparent;
}
.ism6zl0 {
  --outer-stroke-color: transparent;
}
.c1trcag {
  background-color: #E6EFFB;
  color: #426da9;
  --inner-stroke-color: transparent;
}
.knqjk82 {
  --outer-stroke-color: #426da9;
}
.xkfoukb {
  background-color: #d6e3f4;
  color: #1d4f91;
  --inner-stroke-color: transparent;
}
.vnxxt5 {
  --outer-stroke-color: #1d4f91;
}
.xsftvu5 {
  background-color: #bbcfea;
  color: #123f7a;
  --inner-stroke-color: transparent;
}
.ehvqmn0 {
  --outer-stroke-color: #123f7a;
}
.heichtp {
  background-color: #d6d6d6;
  color: #8c8c8c;
  --inner-stroke-color: transparent;
}
.p188sp {
  --outer-stroke-color: transparent;
}
.yyhxqji {
  background-color: #426da9;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.xaa18at {
  --outer-stroke-color: transparent;
}
.zsugvev {
  background-color: #426da9;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.b7yf4hv {
  --outer-stroke-color: #426da9;
}
.ymsv5be {
  background-color: #1d4f91;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.cnl1ofs {
  --outer-stroke-color: #1d4f91;
}
.ynjaqd {
  background-color: #123f7a;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.jpvpgwr {
  --outer-stroke-color: #123f7a;
}
.opr6f8 {
  background-color: #8c8c8c;
  color: #d6d6d6;
  --inner-stroke-color: transparent;
}
.y9aaru {
  --outer-stroke-color: transparent;
}
.b3z1ylj {
  background-color: #1d4f91;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.qeaa9l {
  --outer-stroke-color: transparent;
}
.qald4g {
  background-color: #1d4f91;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.nltqyj {
  --outer-stroke-color: #426da9;
}
.flh4ic {
  background-color: #1d4f91;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.qz770m {
  --outer-stroke-color: #1d4f91;
}
.lz68l2 {
  background-color: #1d4f91;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.t5gwiv {
  --outer-stroke-color: #123f7a;
}
.wxu3cc {
  background-color: #1d4f91;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.qpeeq4 {
  --outer-stroke-color: transparent;
}
.g2l0y4 {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: transparent;
}
.v7und5j {
  --outer-stroke-color: transparent;
}
.iwsho52 {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #883b92;
}
.l4ae07 {
  --outer-stroke-color: #883b92;
}
.egwhje {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #6d2077;
}
.x6log2h {
  --outer-stroke-color: #6d2077;
}
.hwv0ogl {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #53135b;
}
.g48jgo {
  --outer-stroke-color: #53135b;
}
.hx0csqp {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: transparent;
}
.mh42cc {
  --outer-stroke-color: transparent;
}
.y7hkoe {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #d6d6d6;
}
.c56g8i {
  --outer-stroke-color: transparent;
}
.szpxjn {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #883b92;
}
.m2uvjk {
  --outer-stroke-color: #883b92;
}
.x6rzyr1 {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #6d2077;
}
.mcw1gw {
  --outer-stroke-color: #6d2077;
}
.czeihj2 {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #53135b;
}
.mp7ba7 {
  --outer-stroke-color: #53135b;
}
.yrac8f {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #d6d6d6;
}
.h541kj {
  --outer-stroke-color: transparent;
}
.xfrx38 {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #8c8c8c;
}
.khee0j {
  --outer-stroke-color: transparent;
}
.cnc5fvw {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #883b92;
}
.i07j5d {
  --outer-stroke-color: #883b92;
}
.bx8psk {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #6d2077;
}
.fa8p2p {
  --outer-stroke-color: #6d2077;
}
.nnwxsgv {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #53135b;
}
.cwjsayq {
  --outer-stroke-color: #53135b;
}
.d2kjzcd {
  background-color: #f6f6f6;
  color: #333333;
  --inner-stroke-color: #8c8c8c;
}
.zh9suq {
  --outer-stroke-color: transparent;
}
.n3ptu3 {
  background-color: #fef2ff;
  color: #333333;
  --inner-stroke-color: #883b92;
}
.u7j1umi {
  --outer-stroke-color: transparent;
}
.kgu7j6m {
  background-color: #fef2ff;
  color: #333333;
  --inner-stroke-color: #883b92;
}
.ss9hys {
  --outer-stroke-color: #883b92;
}
.if6mhu {
  background-color: #fef2ff;
  color: #333333;
  --inner-stroke-color: #6d2077;
}
.q8xpc3w {
  --outer-stroke-color: #6d2077;
}
.vz47rd {
  background-color: #fef2ff;
  color: #333333;
  --inner-stroke-color: #53135b;
}
.esl07v {
  --outer-stroke-color: #53135b;
}
.xth4cr {
  background-color: #fef2ff;
  color: #333333;
  --inner-stroke-color: #8c8c8c;
}
.jgn0q7 {
  --outer-stroke-color: transparent;
}
.u3fp6la {
  background-color: transparent;
  color: #883b92;
  --inner-stroke-color: transparent;
}
.cj1ibc {
  --outer-stroke-color: transparent;
}
.rjagwuf {
  background-color: transparent;
  color: #883b92;
  --inner-stroke-color: transparent;
}
.wqgzra {
  --outer-stroke-color: #883b92;
}
.jn3gx8f {
  background-color: transparent;
  color: #6d2077;
  --inner-stroke-color: transparent;
}
.i0i5om {
  --outer-stroke-color: #6d2077;
}
.g23fuq {
  background-color: #fef2ff;
  color: #53135b;
  --inner-stroke-color: transparent;
}
.f24bbxz {
  --outer-stroke-color: #53135b;
}
.o7uxzg0 {
  background-color: transparent;
  color: #8c8c8c;
  --inner-stroke-color: transparent;
}
.ndlgf1 {
  --outer-stroke-color: transparent;
}
.f4ky3h {
  background-color: #fef2ff;
  color: #883b92;
  --inner-stroke-color: transparent;
}
.ht48yv {
  --outer-stroke-color: transparent;
}
.k4skz8 {
  background-color: #fef2ff;
  color: #883b92;
  --inner-stroke-color: transparent;
}
.vmiimhn {
  --outer-stroke-color: #883b92;
}
.o0tx9n {
  background-color: #eed3f1;
  color: #6d2077;
  --inner-stroke-color: transparent;
}
.xsmlet {
  --outer-stroke-color: #6d2077;
}
.jxk03h {
  background-color: #dfb6e4;
  color: #53135b;
  --inner-stroke-color: transparent;
}
.ka4a67q {
  --outer-stroke-color: #53135b;
}
.gp5i3ag {
  background-color: #d6d6d6;
  color: #8c8c8c;
  --inner-stroke-color: transparent;
}
.nlnie6 {
  --outer-stroke-color: transparent;
}
.cyuz75 {
  background-color: #883b92;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.cyvu1q2 {
  --outer-stroke-color: transparent;
}
.a78e6m0 {
  background-color: #883b92;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.m6qe6rg {
  --outer-stroke-color: #883b92;
}
.f85n9s {
  background-color: #6d2077;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.ulgd0u4 {
  --outer-stroke-color: #6d2077;
}
.xloe85j {
  background-color: #53135b;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.pi490hh {
  --outer-stroke-color: #53135b;
}
.e2lkyh {
  background-color: #8c8c8c;
  color: #d6d6d6;
  --inner-stroke-color: transparent;
}
.ntpkdb {
  --outer-stroke-color: transparent;
}
.jb4f71p {
  background-color: #6d2077;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.ushguc {
  --outer-stroke-color: transparent;
}
.usphw9i {
  background-color: #6d2077;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.otuooy {
  --outer-stroke-color: #883b92;
}
.ohem4vm {
  background-color: #6d2077;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.a3vuma {
  --outer-stroke-color: #6d2077;
}
.e76b5m {
  background-color: #6d2077;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.zy46p0z {
  --outer-stroke-color: #53135b;
}
.gpr3opc {
  background-color: #6d2077;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.o9tobl {
  --outer-stroke-color: transparent;
}
.e7vlul {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: transparent;
}
.azcvga {
  --outer-stroke-color: transparent;
}
.g34nto {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #af1685;
}
.jbdqczr {
  --outer-stroke-color: #af1685;
}
.skej20 {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #92086d;
}
.t5akgl {
  --outer-stroke-color: #92086d;
}
.bhw7s7 {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #760056;
}
.mjh50 {
  --outer-stroke-color: #760056;
}
.oojkype {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: transparent;
}
.u6v97v {
  --outer-stroke-color: transparent;
}
.fm3uawz {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #d6d6d6;
}
.quxn41 {
  --outer-stroke-color: transparent;
}
.bt72bx9 {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #af1685;
}
.goxfaio {
  --outer-stroke-color: #af1685;
}
.xbbla7 {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #92086d;
}
.eceed2c {
  --outer-stroke-color: #92086d;
}
.sc4j40 {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #760056;
}
.huqxp9 {
  --outer-stroke-color: #760056;
}
.u698jr4 {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #d6d6d6;
}
.k1igxw {
  --outer-stroke-color: transparent;
}
.dmvjyi5 {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #8c8c8c;
}
.qttyh32 {
  --outer-stroke-color: transparent;
}
.uahtndo {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #af1685;
}
.nt02mwv {
  --outer-stroke-color: #af1685;
}
.uj0js5c {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #92086d;
}
.lgh1pgj {
  --outer-stroke-color: #92086d;
}
.dv7etsx {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #760056;
}
.mmvdfg {
  --outer-stroke-color: #760056;
}
.rg16n8 {
  background-color: #f6f6f6;
  color: #333333;
  --inner-stroke-color: #8c8c8c;
}
.zwnftr1 {
  --outer-stroke-color: transparent;
}
.pt8vo6 {
  background-color: #fff0fb;
  color: #333333;
  --inner-stroke-color: #af1685;
}
.d6pc91 {
  --outer-stroke-color: transparent;
}
.ty43ql {
  background-color: #fff0fb;
  color: #333333;
  --inner-stroke-color: #af1685;
}
.tt3dvo {
  --outer-stroke-color: #af1685;
}
.h3km113 {
  background-color: #fff0fb;
  color: #333333;
  --inner-stroke-color: #92086d;
}
.gsozqn4 {
  --outer-stroke-color: #92086d;
}
.xmn0ua {
  background-color: #fff0fb;
  color: #333333;
  --inner-stroke-color: #760056;
}
.f11vdd3 {
  --outer-stroke-color: #760056;
}
.pqy2s7 {
  background-color: #fff0fb;
  color: #333333;
  --inner-stroke-color: #8c8c8c;
}
.md1g3k {
  --outer-stroke-color: transparent;
}
.mdnpm6 {
  background-color: transparent;
  color: #af1685;
  --inner-stroke-color: transparent;
}
.pdcx21 {
  --outer-stroke-color: transparent;
}
.hsw1sd3 {
  background-color: transparent;
  color: #af1685;
  --inner-stroke-color: transparent;
}
.iemkhk8 {
  --outer-stroke-color: #af1685;
}
.jny146j {
  background-color: transparent;
  color: #92086d;
  --inner-stroke-color: transparent;
}
.g23jk3w {
  --outer-stroke-color: #92086d;
}
.pr816n {
  background-color: #fff0fb;
  color: #760056;
  --inner-stroke-color: transparent;
}
.jsyaeij {
  --outer-stroke-color: #760056;
}
.hs9uyap {
  background-color: transparent;
  color: #8c8c8c;
  --inner-stroke-color: transparent;
}
.wss7f10 {
  --outer-stroke-color: transparent;
}
.dx4sy0 {
  background-color: #fff0fb;
  color: #af1685;
  --inner-stroke-color: transparent;
}
.kpioc8 {
  --outer-stroke-color: transparent;
}
.pe9zogx {
  background-color: #fff0fb;
  color: #af1685;
  --inner-stroke-color: transparent;
}
.b5jy5z {
  --outer-stroke-color: #af1685;
}
.k6po7k {
  background-color: #f6cbea;
  color: #92086d;
  --inner-stroke-color: transparent;
}
.dokvmb {
  --outer-stroke-color: #92086d;
}
.kljhxx0 {
  background-color: #eda7da;
  color: #760056;
  --inner-stroke-color: transparent;
}
.y2ut6u {
  --outer-stroke-color: #760056;
}
.d2ogdj {
  background-color: #d6d6d6;
  color: #8c8c8c;
  --inner-stroke-color: transparent;
}
.nsk5d1v {
  --outer-stroke-color: transparent;
}
.laq6b1b {
  background-color: #af1685;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.lvzfmcp {
  --outer-stroke-color: transparent;
}
.e23nj60 {
  background-color: #af1685;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.gxodw6 {
  --outer-stroke-color: #af1685;
}
.edmpxek {
  background-color: #92086d;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.tgpbci {
  --outer-stroke-color: #92086d;
}
.xdhoaj {
  background-color: #760056;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.q2vyx3 {
  --outer-stroke-color: #760056;
}
.iiqbxco {
  background-color: #8c8c8c;
  color: #d6d6d6;
  --inner-stroke-color: transparent;
}
.esc3b2q {
  --outer-stroke-color: transparent;
}
.l81ckn {
  background-color: #92086d;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.lovw7p {
  --outer-stroke-color: transparent;
}
.dgql1a {
  background-color: #92086d;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.umj6smk {
  --outer-stroke-color: #af1685;
}
.ormcf6 {
  background-color: #92086d;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.sa05v68 {
  --outer-stroke-color: #92086d;
}
.idc80dw {
  background-color: #92086d;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.a2yadl {
  --outer-stroke-color: #760056;
}
.unj3am6 {
  background-color: #92086d;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.mrvz74g {
  --outer-stroke-color: transparent;
}
.w9aq33g {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: transparent;
}
.juev75 {
  --outer-stroke-color: transparent;
}
.vsm8aj {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #e4002b;
}
.e04dw8 {
  --outer-stroke-color: #e4002b;
}
.kcgeso {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #c60025;
}
.ylpmmd {
  --outer-stroke-color: #c60025;
}
.z9oh1g {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #a8001f;
}
.rwzfs1 {
  --outer-stroke-color: #a8001f;
}
.rrz5pz {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: transparent;
}
.fooljo {
  --outer-stroke-color: transparent;
}
.xrrdpi {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #d6d6d6;
}
.ccqzfu {
  --outer-stroke-color: transparent;
}
.uupr4p8 {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #e4002b;
}
.n3no29 {
  --outer-stroke-color: #e4002b;
}
.fv5wy73 {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #c60025;
}
.urbv56q {
  --outer-stroke-color: #c60025;
}
.zm20u51 {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #a8001f;
}
.u4z2g {
  --outer-stroke-color: #a8001f;
}
.l7qc6v {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #d6d6d6;
}
.h3fjl1h {
  --outer-stroke-color: transparent;
}
.x01q4c {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #8c8c8c;
}
.qoyx7v {
  --outer-stroke-color: transparent;
}
.nc0ig5n {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #e4002b;
}
.j10bo2 {
  --outer-stroke-color: #e4002b;
}
.ycgo9ni {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #c60025;
}
.bveihkx {
  --outer-stroke-color: #c60025;
}
.kakg52u {
  background-color: #ffffff;
  color: #333333;
  --inner-stroke-color: #a8001f;
}
.gm9esn {
  --outer-stroke-color: #a8001f;
}
.fg43zdx {
  background-color: #f6f6f6;
  color: #333333;
  --inner-stroke-color: #8c8c8c;
}
.ewm68q {
  --outer-stroke-color: transparent;
}
.obd5ko {
  background-color: #fff0f3;
  color: #333333;
  --inner-stroke-color: #e4002b;
}
.c1bhbf6 {
  --outer-stroke-color: transparent;
}
.wpekpb {
  background-color: #fff0f3;
  color: #333333;
  --inner-stroke-color: #e4002b;
}
.jt2ahh {
  --outer-stroke-color: #e4002b;
}
.w98r7g {
  background-color: #fff0f3;
  color: #333333;
  --inner-stroke-color: #c60025;
}
.renj7m {
  --outer-stroke-color: #c60025;
}
.cigxby {
  background-color: #fff0f3;
  color: #333333;
  --inner-stroke-color: #a8001f;
}
.e72hbzw {
  --outer-stroke-color: #a8001f;
}
.pcj7ti9 {
  background-color: #fff0f3;
  color: #333333;
  --inner-stroke-color: #8c8c8c;
}
.l140lvt {
  --outer-stroke-color: transparent;
}
.fu0lftr {
  background-color: transparent;
  color: #e4002b;
  --inner-stroke-color: transparent;
}
.el3p4xc {
  --outer-stroke-color: transparent;
}
.oq0rpc8 {
  background-color: transparent;
  color: #e4002b;
  --inner-stroke-color: transparent;
}
.p3gjqv {
  --outer-stroke-color: #e4002b;
}
.o8ebjn {
  background-color: transparent;
  color: #c60025;
  --inner-stroke-color: transparent;
}
.wpc29i4 {
  --outer-stroke-color: #c60025;
}
.pmqdqgr {
  background-color: #fff0f3;
  color: #a8001f;
  --inner-stroke-color: transparent;
}
.y8d3spq {
  --outer-stroke-color: #a8001f;
}
.lf9ls8 {
  background-color: transparent;
  color: #8c8c8c;
  --inner-stroke-color: transparent;
}
.ov9h91 {
  --outer-stroke-color: transparent;
}
.m1xi94 {
  background-color: #fff0f3;
  color: #e4002b;
  --inner-stroke-color: transparent;
}
.t2rjdn5 {
  --outer-stroke-color: transparent;
}
.pywj7wh {
  background-color: #fff0f3;
  color: #e4002b;
  --inner-stroke-color: transparent;
}
.eu5j2i2 {
  --outer-stroke-color: #e4002b;
}
.wheset {
  background-color: #FFD6DD;
  color: #c60025;
  --inner-stroke-color: transparent;
}
.n9jxtrx {
  --outer-stroke-color: #c60025;
}
.vg8amyt {
  background-color: #fea8b8;
  color: #a8001f;
  --inner-stroke-color: transparent;
}
.dgd2mzh {
  --outer-stroke-color: #a8001f;
}
.wr3rww {
  background-color: #d6d6d6;
  color: #8c8c8c;
  --inner-stroke-color: transparent;
}
.p3bj86 {
  --outer-stroke-color: transparent;
}
.m4mmymo {
  background-color: #e4002b;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.fkmdn2 {
  --outer-stroke-color: transparent;
}
.t7rgfi1 {
  background-color: #e4002b;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.vedemrv {
  --outer-stroke-color: #e4002b;
}
.gzjv7m {
  background-color: #c60025;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.w86lya {
  --outer-stroke-color: #c60025;
}
.uon7n4 {
  background-color: #a8001f;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.iod1h98 {
  --outer-stroke-color: #a8001f;
}
.bs1wltb {
  background-color: #8c8c8c;
  color: #d6d6d6;
  --inner-stroke-color: transparent;
}
.pbdl7b {
  --outer-stroke-color: transparent;
}
.tlndxh {
  background-color: #c60025;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.iis65ro {
  --outer-stroke-color: transparent;
}
.t30dng {
  background-color: #c60025;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.h6u8oj {
  --outer-stroke-color: #e4002b;
}
.wun7wxs {
  background-color: #c60025;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.ix8okkg {
  --outer-stroke-color: #c60025;
}
.q33jmk {
  background-color: #c60025;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.uo4w6e {
  --outer-stroke-color: #a8001f;
}
.qa7ihe {
  background-color: #c60025;
  color: #ffffff;
  --inner-stroke-color: transparent;
}
.prhp5l {
  --outer-stroke-color: transparent;
}
.nppu57d {
  background-color: transparent;
  color: #ffffff;
}

.w7892o {
  background-color: transparent;
  color: #ffffff;
}
.cvesmk {
  --outer-stroke-color: #ffffff;
}
.c2d438 {
  background-color: transparent;
  color: #ffffff;
}
.gkwk5yo {
  --outer-stroke-color: #ffffff;
}
.ibmn8ik {
  background-color: transparent;
  color: #ffffff;
}
.md0c7k8 {
  --outer-stroke-color: #ffffff;
}
.fdbstq {
  background-color: transparent;
  color: #ffffff;
}

.rtgbdch {
  background-color: transparent;
  color: #ffffff;
  --inner-stroke-color: #ffffff;
}

.ow00flm {
  background-color: transparent;
  color: #ffffff;
  --inner-stroke-color: #ffffff;
}
.py3tp0 {
  --outer-stroke-color: #ffffff;
}
.ikp4o7q {
  background-color: transparent;
  color: #ffffff;
  --inner-stroke-color: #ffffff;
}
.a4v3s {
  --outer-stroke-color: #ffffff;
}
.kk3pqa {
  background-color: transparent;
  color: #ffffff;
  --inner-stroke-color: #ffffff;
}
.c177rk {
  --outer-stroke-color: #ffffff;
}
.y7d4o5k {
  background-color: transparent;
  color: #ffffff;
  --inner-stroke-color: #ffffff;
}

.ptas4o {
  background-color: transparent;
  color: #ffffff;
}

.pu4mnf3 {
  background-color: transparent;
  color: #ffffff;
}
.v2kkr3p {
  --outer-stroke-color: #ffffff;
}
.q735xy {
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
}
.dscjpox {
  --outer-stroke-color: #ffffff;
}
.muwcyp {
  background-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
}
.juom18n {
  --outer-stroke-color: #ffffff;
}
.nwkyzb {
  background-color: transparent;
  color: #d6d6d6;
}

.oa6ipza {
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
}

.tmo4uy7 {
  background-color: rgba(255, 255, 255, 0.2);
  color: #ffffff;
}
.jlzx74 {
  --outer-stroke-color: rgba(255, 255, 255, 0.2);
}
.a1iw3a {
  background-color: rgba(255, 255, 255, 0.3);
  color: #ffffff;
}
.syg8rx {
  --outer-stroke-color: rgba(255, 255, 255, 0.3);
}
.lxyjti5 {
  background-color: rgba(255, 255, 255, 0.4);
  color: #ffffff;
}
.otmxfm {
  --outer-stroke-color: rgba(255, 255, 255, 0.4);
}
.t3q99k {
  background-color: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.6);
}
.r6pamd3 {
  --outer-stroke-color: rgba(255, 255, 255, 0.1);
}
.nfutc3 {
  background-color: rgba(255, 255, 255, 0.8);
}

.gd2vorq {
  background-color: rgba(255, 255, 255, 0.8);
}
.rknsb1l {
  --outer-stroke-color: rgba(255, 255, 255, 0.8);
}
.w6t77j {
  background-color: rgba(255, 255, 255, 0.9);
}
.kbbbzgs {
  --outer-stroke-color: rgba(255, 255, 255, 0.9);
}
.ijfe2a4 {
  background-color: #ffffff;
}
.ockc6z {
  --outer-stroke-color: #ffffff;
}
.gq28s1w {
  background-color: rgba(255, 255, 255, 0.2);
}

.cjlq8v {
  background-color: #ffffff;
}

.ot1i2ag {
  background-color: #ffffff;
}

.ql76sxo {
  background-color: #ffffff;
}

.q4xtxou {
  background-color: #ffffff;
}

.ynya2ys {
  background-color: #ffffff;
}

.khy2e9g {
  color: #426da9;
}
.r394xqn {
  color: #1d4f91;
}
.z17wv9r {
  color: #883b92;
}
.edob4b {
  color: #6d2077;
}
.rrdxxf {
  color: #af1685;
}
.bf564n {
  color: #92086d;
}
.vfh9b6 {
  color: #e4002b;
}
.bbigix {
  color: #c60025;
}
.v1vubl::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.12);
}
.xshtg0v::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.12);
}
.kjm4ne::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
}
.by8qh9r {
  border-radius: 2px;
}
.zbbfaej {
  border-radius: 4px;
}
.blvwgp {
  border-radius: 6px;
}
.jgvmish {
  border-radius: 9999px;
}
.f3koe3z {
  border-radius: 1px;
}
.jcmsr9 {
  border-radius: 3px;
}
.xsr62cn {
  border-radius: 5px;
}
.ut7vhb {
  border-radius: 9998px;
}
.bbu6ct {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: none;
  border: none;
  margin: 0;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-decoration: none;
  transition-property: background-color, color, box-shadow;
  transition-duration: 64ms;
  box-shadow: 0 0 0 1px var(--outer-stroke-color, transparent),inset 0 0 0 1px var(--inner-stroke-color, transparent);
}
.nx088w {
  display: flex;
  width: 100%;
  overflow: hidden;
}
.lf2db9 {
  padding: 0;
}
.r334r3 {
  padding: 1px;
}
.oakkjc {
  cursor: default;
}
.x8exo {
  cursor: not-allowed;
}
.x2cpy23 {
  width: 1em;
  min-width: 1em;
}
.l5ei8m {
  height: 1em;
  min-height: 1em;
}
.xtwwgj3 {
  width: 100%;
}
.qrfasj {
  height: 100%;
}
.sr392x4 {
  font-size: 1px;
}
.cl56t6 {
  font-size: 2px;
}
.bwtoam {
  font-size: 4px;
}
.gk6n9i {
  font-size: 8px;
}
.yu1vws {
  font-size: 12px;
}
.bvxf0s {
  font-size: 16px;
}
.opnhgs {
  font-size: 20px;
}
.qrj0ks {
  font-size: 24px;
}
.stejos {
  font-size: 28px;
}
.itdzfuc {
  font-size: 32px;
}
.mrc3wqc {
  font-size: 36px;
}
.yeiduac {
  font-size: 40px;
}
.ccgib6c {
  font-size: 44px;
}
.gaems2c {
  font-size: 48px;
}
.if3ado {
  font-size: 52px;
}
.egytho {
  font-size: 56px;
}
.jckf1o {
  font-size: 64px;
}
.lefy5o {
  font-size: 68px;
}
.y860lo {
  font-size: 72px;
}
.olxcftg {
  font-size: 80px;
}
.m2xzs1g {
  font-size: 96px;
}
.gpgbmyk {
  font-size: 128px;
}
.srguhw4 {
  font-size: 160px;
}
.q8aqr4m {
  font-size: 192px;
}
.q6k375u {
  font-size: 224px;
}
.cm0jlo {
  font-size: 256px;
}
.a4nya {
  font-size: 512px;
}
.vnsopbf {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  display: inline-flex;
}
.m2mit7 {
  align-items: flex-start;
}
.daes5z {
  align-items: center;
}
.ve6xe1 {
  align-items: flex-end;
}
.lh7nbt {
  align-items: stretch;
}
.ud1bcz {
  display: flex;
  width: 100%;
}
.nxsa86 {
  display: inline-flex;
}
.wvq1qh2 {
  flex-direction: row;
}
.ofxnqw0 {
  flex-direction: column;
}
.t4we9dz {
  margin: 0;
}
.bk6dmh {
  cursor: pointer;
  text-decoration: none;
  color: #426da9;
}
.bk6dmh:hover {
  color: #1d4f91;
}
.bk6dmh.bk6dmh:active {
  color: #123f7a;
}
.jggnsbd {
  font-family: 'Roboto Mono', Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}
.md6zy0 {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
}
.pq59m5 {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
.yxvp71 {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
}
.cr18a2a {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
}
.ef4l8iq {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 30px;
  font-weight: 400;
  line-height: 40px;
}
.th6lz9h {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 36px;
  font-weight: 400;
  line-height: 48px;
}
.h644zl {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 48px;
  font-weight: 400;
  line-height: 64px;
}
.bozfwjd {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
}
.dqa3far {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
}
.o9v6k3w {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
}
.edpc7tu {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 30px;
  font-weight: 700;
  line-height: 40px;
}
.tfrcykl {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 36px;
  font-weight: 700;
  line-height: 48px;
}
.ild5oh {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 48px;
  font-weight: 700;
  line-height: 64px;
}
.h6t5col {
  width: 24px;
  height: 24px;
  min-height: 24px;
  min-width: 24px;
}
.rsaj1pp {
  width: 32px;
  height: 32px;
  min-height: 32px;
  min-width: 32px;
}
.zuzfd49 {
  width: 48px;
  height: 48px;
  min-height: 48px;
  min-width: 48px;
}
.f3qkz1 {
  width: 22px;
  height: 22px;
  min-width: 22px;
  min-height: 22px;
}
.xnzlhpt {
  width: 30px;
  height: 30px;
  min-width: 30px;
  min-height: 30px;
}
.hz5be6f {
  width: 44px;
  height: 44px;
  min-width: 44px;
  min-height: 44px;
}
.gvj82x {
  border-radius: 9999px;
  overflow: hidden;
}
.i9xaps2 {
  -o-object-fit: cover;
     object-fit: cover;
}
.l1cewe {
  filter: grayscale(100%) contrast(50%);
}
.m1xzrq0 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.oyqgri {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 12px;
  font-weight: 400;
  line-height: 1;
}
.ywwfm2 {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
}
.he1dmzb {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 18px;
  font-weight: 700;
  line-height: 1;
}
.ke9xb8s {
  display: inline-flex;
  position: relative;
  transition-property: top, left;
  transition-duration: 150ms;
}
.fr2v8nn {
  flex-direction: row;
}
.hq5uqul {
  flex-direction: column;
}
.afpxxu {
  padding: 0;
}
.v7mk7h {
  display: flex;
  width: 100%;
}
.fx2b723 {
  position: relative;
  box-sizing: border-box;
  min-width: 50px;
  min-height: 30px;
  flex: 1;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: none;
  border: 0;
  margin: 0;
  padding-right: 0;
  padding-left: 0;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  background: transparent;
  color: inherit;
}
.fx2b723:disabled {
  -webkit-text-fill-color: inherit;
  cursor: not-allowed;
}
.fx2b723:disabled::-moz-placeholder {
  color: #8c8c8c;
}
.fx2b723:disabled:-ms-input-placeholder {
  color: #8c8c8c;
}
.fx2b723:disabled::placeholder {
  color: #8c8c8c;
}
.fx2b723:not(:disabled)::-moz-placeholder {
  color: #717171;
}
.fx2b723:not(:disabled):-ms-input-placeholder {
  color: #717171;
}
.fx2b723:not(:disabled)::placeholder {
  color: #717171;
}
.fx2b723:first-child {
  padding-left: 8px;
}
.fx2b723:last-child {
  padding-right: 8px;
}
.fx2b723[type=date]::-webkit-calendar-picker-indicator {
  position: absolute;
  right: 0;
  background: transparent;
  width: 30px;
}
.fx2b723[type=time]::-webkit-calendar-picker-indicator {
  display: none;
}
.fx2b723[type=number] {
  text-align: center;
  -moz-appearance: textfield;
}
.fx2b723[type=number]::-webkit-outer-spin-button, .fx2b723[type=number]::-webkit-inner-spin-button {
  -webkit-appearance: none;
          appearance: none;
}
.p7diqh.p7diqh {
  padding: 4px;
}
.fltfe0 {
  height: 30px;
}
.ufovwa {
  padding-top: 6px;
}
.ufovwa::-webkit-file-upload-button {
  -webkit-appearance: none;
          appearance: none;
  border: 0;
  margin-top: 0;
  margin-right: 8px;
  margin-bottom: 0;
  margin-left: 0;
  padding: 0;
  background: transparent;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #426da9;
}
.ufovwa::file-selector-button {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: 0;
  margin-top: 0;
  margin-right: 8px;
  margin-bottom: 0;
  margin-left: 0;
  padding: 0;
  background: transparent;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #426da9;
}
.ufovwa:hover::-webkit-file-upload-button {
  color: #1d4f91;
}
.ufovwa:hover::file-selector-button {
  color: #1d4f91;
}
.ufovwa:active::-webkit-file-upload-button {
  color: #123f7a;
}
.ufovwa:active::file-selector-button {
  color: #123f7a;
}
.ufovwa:disabled::-webkit-file-upload-button {
  color: #8c8c8c;
}
.ufovwa:disabled::file-selector-button {
  color: #8c8c8c;
}
.ts7cw3z {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='5' fill='%23426da9'%3E%3Cpolygon points='0,0 5,5 9,0'/%3E%3C/svg%3E");
  background-position-y: center;
  background-position-x: calc(100% - 4px);
  background-repeat: no-repeat;
}
.ts7cw3z.ts7cw3z {
  padding-right: 32px;
}
.ts7cw3z:hover {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='5' fill='%231d4f91'%3E%3Cpolygon points='0,0 5,5 9,0'/%3E%3C/svg%3E");
}
.ts7cw3z:active {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='5' fill='%23123f7a'%3E%3Cpolygon points='0,0 5,5 9,0'/%3E%3C/svg%3E");
}
.ts7cw3z:disabled {
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='5' fill='%238c8c8c'%3E%3Cpolygon points='0,0 5,5 9,0'/%3E%3C/svg%3E");
}
.r1rm8nt {
  display: inline-flex;
}
.d5z07p {
  display: inline-flex;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}


.g2yzo6 {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: none;
  margin: 0;
  border: none;
  background: transparent;
  color: #426da9;
  cursor: pointer;
}
.g2yzo6:hover {
  color: #1d4f91;
}
.g2yzo6.g2yzo6:active {
  color: #123f7a;
}
.g2yzo6 + .g2yzo6 {
  padding-left: 4px;
  margin-left: -4px;
}
.ok68fyy {
  color: #e4002b;
}
.ok68fyy:hover {
  color: #c60025;
}
.ok68fyy.ok68fyy:active {
  color: #a8001f;
}
.vsh4m5 {
  background-color: #eaeaea;
  color: #8c8c8c;
}
.vsh4m5 + .vsh4m5 {
  padding-left: 4px;
  margin-left: -4px;
}
:first-child > .vsh4m5:last-child {
  margin-right: 8px;
}
:last-child > .vsh4m5:first-child {
  margin-left: 8px;
}
.nwkp6p {
  background: #FFD6DD;
  color: #c60025;
}
.dcdca2 {
  background: transparent;
  padding: 0;
}
.i7o6jn {
  width: 100%;
  transition-property: background;
  transition-duration: 150ms;
}
.y5w9138 {
  height: 1em;
  margin-top: -1em;
}
.bn4qkgp {
  height: calc(1em + 1px);
  margin-bottom: -1px;
}
.ywxixag {
  background: #d6d6d6;
}
.uqxds5 {
  display: flex;
  margin-top: 6px;
  margin-bottom: 9px;
  align-items: center;
  margin-right: 8px;
  margin-left: 8px;
}
.uqxds5 > * {
  margin-left: 1px;
}
.uqxds5:last-child {
  margin-right: 1px;
}
.isjf2u4 {
  padding-top: 6px;
  padding-bottom: 6px;
}
.mciitc {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding-right: 8px;
  padding-left: 8px;
}
.j8hg3x {
  padding: 0;
  min-width: 100%;
}
.jaypnd {
  display: flex;
  align-items: flex-end;
  padding: 0;
  margin: 0;
}
.ux6bwh8 {
  display: inline-block;
}
.yp2e0q {
  width: 100%;
  height: 1px;
}
.wype04 {
  background: #d6d6d6;
}
.yv8i9ia {
  height: 1em;
  margin-top: -1em;
  background: #e63888;
}
.e8lmub {
  transition-property: margin-left,width;
  transition-duration: 250ms;
}
.b7nchdn {
  border-width: 1px;
  border-style: solid;
  border-color: #d6d6d6;
  background-color: #ffffff;
  color: #333333;
  padding: 0;
  border-radius: 4px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.12);
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  transition: opacity 250ms;
}
.rrtfmmh {
  opacity: 1;
}
.krxlcsy {
  opacity: 0;
}
.ljizerr {
  width: 6px;
  height: 6px;
}
.ljizerr::before,.ljizerr::after {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  left: 0;
  border-width: 6px;
  border-color: transparent;
  border-style: solid;
}
[data-popper-placement*='top'] > .ljizerr {
  bottom: -6px;
}
[data-popper-placement*='top'] > .ljizerr::before,[data-popper-placement*='top'] > .ljizerr::after {
  left: -3px;
  border-bottom-width: 0;
}
[data-popper-placement*='top'] > .ljizerr::before {
  top: 1px;
  border-top-color: #d6d6d6;
}
[data-popper-placement*='top'] > .ljizerr::after {
  border-top-color: #ffffff;
}
[data-popper-placement*='right'] > .ljizerr {
  left: -6px;
}
[data-popper-placement*='right'] > .ljizerr::before,[data-popper-placement*='right'] > .ljizerr::after {
  top: -3px;
  border-left-width: 0;
}
[data-popper-placement*='right'] > .ljizerr::before {
  left: -1px;
  border-right-color: #d6d6d6;
}
[data-popper-placement*='right'] > .ljizerr::after {
  border-right-color: #ffffff;
}
[data-popper-placement*='bottom'] > .ljizerr {
  top: -6px;
}
[data-popper-placement*='bottom'] > .ljizerr::before,[data-popper-placement*='bottom'] > .ljizerr::after {
  left: -3px;
  border-top-width: 0;
}
[data-popper-placement*='bottom'] > .ljizerr::before {
  top: -1px;
  border-bottom-color: #d6d6d6;
}
[data-popper-placement*='bottom'] > .ljizerr::after {
  border-bottom-color: #ffffff;
}
[data-popper-placement*='left'] > .ljizerr {
  right: -6px;
}
[data-popper-placement*='left'] > .ljizerr::before,[data-popper-placement*='left'] > .ljizerr::after {
  top: -3px;
  border-right-width: 0;
}
[data-popper-placement*='left'] > .ljizerr::before {
  left: 1px;
  border-left-color: #d6d6d6;
}
[data-popper-placement*='left'] > .ljizerr::after {
  border-left-color: #ffffff;
}
.yohtou {
  overflow: hidden;
  border-radius: 3px;
}
.o68gvp {
  color: #426da9;
}
.r35bcd {
  color: #007a3b;
}
.absfs38 {
  color: #995006;
}
.l7g8q0l {
  color: #c60025;
}
.udwq4so {
  padding-top: 12px;
  padding-right: 3px;
  padding-left: 4px;
  border-right-width: 1px;
  border-right-style: solid;
  border-right-color: #d6d6d6;
}
.oevuxru {
  background-color: #d6e3f4;
}
.vcqs9yz {
  background-color: #D0F6DB;
}
.ngag9l {
  background-color: #FFF1BD;
}
.ci33pk {
  background-color: #FFD6DD;
}
.h4xoi7z {
  display: flex;
  width: 100%;
  flex-direction: row;
}
.hzjv16 {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin: 0;
}
.hg7n2i {
  padding-top: 12px;
  padding-right: 12px;
  padding-left: 12px;
}
.czn2ig {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
.ptp2xp {
  flex: 1;
}
.jqc3qx {
  padding-right: 12px;
  padding-bottom: 12px;
  padding-left: 12px;
}
.qtxgyi {
  flex: 1;
  display: flex;
  background-color: #ffffff;
  color: #333333;
}
.n1g32d {
  flex-direction: row;
  padding: 12px;
}
.n1g32d > * + * {
  margin-left: 8px;
}
.zqah2b1 {
  flex-direction: column;
}
.zqah2b1 > * + * {
  margin-top: 8px;
}
.wcm7d5 {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.hhptd2t {
  margin-top: -6px;
  margin-right: -6px;
  margin-bottom: -6px;
}
.lumbjn7 {
  margin-top: 6px;
  margin-right: 6px;
  margin-bottom: -100%;
}
.u6jriw {
  border-radius: 4px;
}
.qcyu2c {
  display: flex;
}
.qcyu2c + .qcyu2c {
  margin-left: 8px;
}
.qxeyhcw {
  padding-right: 19px;
  padding-left: 19px;
}
.y3iu4ny {
  padding-left: 7px;
  padding-right: 7px;
}
.oyxden8 + .oyxden8 {
  margin-left: 8px;
}
.fz163h {
  padding-top: 5px;
  padding-bottom: 5px;
  display: inline-flex;
}
.v22wwz {
  padding-top: 8px;
  padding-bottom: 8px;
  white-space: nowrap;
}
.gmztw {
  border-radius: 2px;
  width: 16px;
  height: 16px;
  background-size: 16px;
  position: relative;
}
.gmztw::after {
  position: absolute;
  content: '';
}
.liezrt::after {
  border-style: solid;
  border-color: currentColor;
  transform: rotate(-45deg);
}
.t158rzd::after {
  top: 4px;
  left: 2px;
  width: 10px;
  height: 4px;
  border-top-width: 0;
  border-right-width: 0;
  border-bottom-width: 2px;
  border-left-width: 2px;
}
.ls412fj::after {
  top: 5px;
  left: 3px;
  width: 9px;
  height: 3px;
  border-top-width: 0;
  border-right-width: 0;
  border-bottom-width: 1px;
  border-left-width: 1px;
}
.dmn3u2::before {
  content: '';
  position: absolute;
  top: 1px;
  left: 1px;
  width: 14px;
  height: 14px;
  border-radius: 1px;
  box-shadow: inset 0 0 0 3px currentColor;
}
.dmn3u2::after {
  background-color: transparent;
  box-shadow: 0 0 0 3px currentColor;
  border-radius: 1px;
}
.iv0w13k::after {
  top: 4px;
  left: 4px;
  width: 8px;
  height: 8px;
}
.hwmwkr::after {
  top: 5px;
  left: 5px;
  width: 6px;
  height: 6px;
}
.p2d1zaz {
  display: flex;
  flex-shrink: 0;
}
.v8pyht {
  margin-top: -2px;
  margin-bottom: -2px;
}
.d4u1sa1 {
  margin: 0;
  border: 0;
  flex-shrink: 0;
}
.fxj0vq {
  height: 1px;
  width: 1em;
  min-width: 1em;
}
.gbv7r1q {
  width: 1px;
  height: 1em;
  min-height: 1em;
}
.ci8onje {
  height: 1px;
  width: 100%;
}
.qtdckn {
  width: 1px;
  height: 100%;
}
.nh6g6b {
  font-size: 1px;
}
.pytw8f5 {
  font-size: 2px;
}
.xwi7qxp {
  font-size: 4px;
}
.nruuryt {
  font-size: 8px;
}
.dxracx {
  font-size: 12px;
}
.fzmtgx {
  font-size: 16px;
}
.stcvwx {
  font-size: 20px;
}
.uv8f0x {
  font-size: 24px;
}
.wx3y4x {
  font-size: 28px;
}
.dpaa1e7 {
  font-size: 32px;
}
.hn8eia7 {
  font-size: 36px;
}
.taeofu7 {
  font-size: 40px;
}
.x8cswq7 {
  font-size: 44px;
}
.b6axdm7 {
  font-size: 48px;
}
.nisott {
  font-size: 52px;
}
.jko7xt {
  font-size: 56px;
}
.ng9tht {
  font-size: 64px;
}
.pi5clt {
  font-size: 68px;
}
.twp8mxb {
  font-size: 72px;
}
.jhtn1db {
  font-size: 80px;
}
.t5pmep {
  font-size: 96px;
}
.ark17t {
  font-size: 128px;
}
.pr16a9 {
  font-size: 160px;
}
.rx4x1r {
  font-size: 192px;
}
.tnsh0j {
  font-size: 224px;
}
.dm77u73 {
  font-size: 256px;
}
.ryj3puh {
  font-size: 512px;
}
.exkw0eg {
  background-color: #d6d6d6;
}
.urq1y3 {
  background-color: #d6d6d6;
}
.x2zotov {
  background-color: #8c8c8c;
}
.k56pd {
  background-color: #426da9;
}
.p293lih {
  background-color: #d6d6d6;
}
.qlugy0 {
  background-color: #426da9;
}
.wbnq9zo {
  background-color: #bbcfea;
}
.wrgfj9 {
  background-color: #426da9;
}
.ho5nfr {
  background-color: #d6d6d6;
}
.ele4 {
  background-color: #d6d6d6;
}
.axraa8u {
  background-color: #8c8c8c;
}
.umfjuqq {
  background-color: #883b92;
}
.ewm4516 {
  background-color: #d6d6d6;
}
.j0qcj7 {
  background-color: #883b92;
}
.tnxtuej {
  background-color: #dfb6e4;
}
.a6cb4g {
  background-color: #883b92;
}
.wx26yg {
  background-color: #d6d6d6;
}
.wbwsrf {
  background-color: #d6d6d6;
}
.b1fi2vj {
  background-color: #8c8c8c;
}
.gb20mc2 {
  background-color: #af1685;
}
.fowek89 {
  background-color: #d6d6d6;
}
.d97t1mj {
  background-color: #af1685;
}
.o3n5fd {
  background-color: #eda7da;
}
.g32731a {
  background-color: #af1685;
}
.pc4mpqp {
  background-color: #d6d6d6;
}
.iejebcs {
  background-color: #d6d6d6;
}
.mqauze {
  background-color: #8c8c8c;
}
.d2ikayp {
  background-color: #e4002b;
}
.dse1n2 {
  background-color: #d6d6d6;
}
.dumxr8 {
  background-color: #e4002b;
}
.e8vxznu {
  background-color: #fea8b8;
}
.k08wch {
  background-color: #e4002b;
}
.dkt3g3t {
  line-height: 1;
  padding-top: 4px;
  padding-right: 8px;
  padding-bottom: 4px;
  padding-left: 8px;
  margin-top: 4px;
  margin-right: 1px;
  margin-bottom: 4px;
  margin-left: 1px;
}
.vrznxj {
  width: 100%;
  min-width: auto;
  max-width: 100%;
  overflow-x: auto;
}
.a4diwk8 {
  fill: currentColor;
  font-size: 12px;
  width: 0.666em;
  min-width: 0.666em;
  height: 1.167em;
  min-height: 1.167em;
}
.akh80u6 {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: 0;
  outline: 0;
  border-radius: 4px;
  background: transparent;
  margin: 0;
  padding-top: 0;
  padding-right: 4px;
  padding-bottom: 0;
  padding-left: 4px;
  display: inline-flex;
  flex-direction: column;
}
.akh80u6:focus {
  box-shadow: 0 0 0 1px #426da9;
}
.akh80u6:focus:hover {
  box-shadow: 0 0 0 1px #1d4f91;
}
.akh80u6:focus:active {
  box-shadow: 0 0 0 1px #123f7a;
}
.lfwnu3 {
  display: inline-block;
  border-width: 4px;
  border-style: solid;
}
.lfwnu3 + .lfwnu3 {
  margin-top: 4px;
}
.tei09kv {
  border-color: #8c8c8c;
}
.yiyz77c {
  border-color: #ef62a8;
}
.guwutl {
  border-top-color: transparent;
  border-right-color: transparent;
  border-left-color: transparent;
}
.c8kp6i {
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: transparent;
}
.utwqtmg {
  display: inline-block;
}
.vgsnxw {
  display: table;
  border-collapse: collapse;
  border-spacing: 0;
}
.lqnbde {
  margin-right: -1px;
}
.ndsr6sp {
  display: table-header-group;
}
.pfftxv {
  display: table-row-group;
}
.yaebmd {
  display: table-row;
  height: 1px;
}
@-moz-document url-prefix() {
  .yaebmd {
    height: 100%;
  }
}
.cxh6fl {
  display: flex;
}
.ekbegro {
  padding: 0;
  height: inherit;
}
.jaq81t {
  display: table-cell;
  height: inherit;
}
.wkfocd {
  display: inline-block;
  box-sizing: border-box;
}
.xj0f7d3 {
  text-align: left;
}
.i1is60 {
  text-align: center;
}
.rnribwf {
  text-align: right;
}
.rp5l71 {
  width: 1px;
}
.pwcme3t {
  display: flex;
  align-items: stretch;
  width: 100%;
  height: 100%;
}
.e9dg8w {
  flex: 1;
  display: flex;
  align-items: center;
  box-shadow: none;
  padding-right: 11px;
  padding-left: 11px;
  overflow: hidden;
}
.jevqntd {
  padding-top: 10px;
  padding-bottom: 10px;
}
.iky8it {
  padding-top: 4px;
  padding-bottom: 4px;
}
.cqiveh {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  background: #f6f6f6;
  box-shadow: inset 0 -1px 0 0 #d6d6d6;
}
.umgu460 {
  background: #f6f6f6;
}
.pvzawl {
  overflow: hidden;
  width: 100%;
}
.sncna6 {
  position: relative;
  display: flex;
  padding: 0;
  top: 0;
  transition: top 250ms;
  transition-timing-function: linear;
}
.slmhi4y {
  overflow: hidden;
}
.khr2be {
  top: -100%;
}
.xpynqhp {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition-property: background-color,visibility,-webkit-backdrop-filter;
  transition-property: background-color,backdrop-filter,visibility;
  transition-property: background-color,backdrop-filter,visibility,-webkit-backdrop-filter;
  transition-duration: 125ms;
}
.bzhkw0n {
  background-color: rgba(255,255,255,0.5);
  -webkit-backdrop-filter: blur(1px) grayscale(50%);
          backdrop-filter: blur(1px) grayscale(50%);
  visibility: initial;
}
.agqo94y {
  background-color: transparent;
  visibility: hidden;
}
.e3ja4o {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.xug97g5 {
  visibility: hidden;
}
.yy4k53g {
  overflow: hidden;
  border-radius: 16px;
  flex: 1;
  display: flex;
}
.knvh75s {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.wzreld {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  margin: 0;
  flex: 1;
}
.wzreld:not(:first-child) {
  margin-left: 8px;
}
.wzreld:not(:last-child) {
  margin-right: 8px;
}
.j3el5m {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-basis: 52px;
  flex-shrink: 0;
}
.tyt8ze {
  padding-left: 20px;
}
.usdycg {
  padding-left: 10px;
}
.k4f676e {
  padding-right: 20px;
}
.eibw6my {
  padding-right: 10px;
}
.npjmg6 {
  padding-right: 20px;
  padding-left: 20px;
}
.gn99pgi {
  overflow: auto;
  position: relative;
  padding-top: 1px;
  padding-bottom: 1px;
}
.gn99pgi:last-child {
  padding-bottom: 16px;
}
.fydif6h {
  padding-top: 16px;
  padding-bottom: 16px;
}
.prbuyx {
  padding-top: 10px;
  padding-bottom: 10px;
}
.weke11i {
  flex-basis: 1px;
  flex-shrink: 0;
  margin-top: -1px;
}
.c7xig8 {
  color: #333333;
  padding-top: 1px;
  padding-bottom: 1px;
  white-space: nowrap;
}
.byxt5xv {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  border: 0;
  margin: 0;
  padding: 0;
  outline: none;
  font: inherit;
  background: transparent;
  color: inherit;
  display: flex;
}
.afydxje {
  width: 100%;
  transition-property: background,height,color;
  transition-duration: 300ms,300ms,150ms;
  overflow: hidden;
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
  background: #ffffff;
  color: #426da9;
}
.afydxje + .afydxje {
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  margin-top: -1px;
}
.afydxje:last-of-type {
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
}
.afydxje:hover {
  color: #1d4f91;
}
.afydxje:active {
  color: #123f7a;
}
.cjvv78 {
  box-shadow: inset 0 0 0 1px #d6d6d6;
}
.f5xk8f {
  position: relative;
  z-index: 1;
  box-shadow: inset 0 0 0 1px currentColor,0 0 0 1px currentColor;
}
.giqu20 {
  cursor: default;
  outline: none;
  list-style: none;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  padding-right: 21px;
  padding-left: 21px;
}
.giqu20::-webkit-details-marker {
  display: none;
}
*:last-of-type > .giqu20 {
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
}
*:first-of-type > .giqu20 {
  border-top-right-radius: 6px;
  border-top-left-radius: 6px;
}
.wmbawy {
  background: transparent;
}
.x8sm1g {
  background: #f6f6f6;
}
.x8sm1g:focus {
  box-shadow: inset 0 0 0 1px #426da9;
}
.x8sm1g:not(:focus) {
  border-top: 1px solid #d6d6d6;
  border-right: 1px solid #d6d6d6;
  border-left: 1px solid #d6d6d6;
  padding-right: 20px;
  padding-left: 20px;
}
.x8sm1g:not(:focus):last-of-type {
  border-bottom: 1px solid #d6d6d6;
}
.u41ig8 {
  display: flex;
}
.nxoipl {
  min-height: 20px;
  box-sizing: content-box;
  color: #333333;
  word-break: break-word;
}
.j2nsxd1 {
  padding-top: 10px;
  padding-bottom: 10px;
}
.xtsu90 {
  padding-top: 9px;
  padding-bottom: 9px;
}
.ilnoav {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.q2t9pvw {
  min-width: 10px;
  fill: currentColor;
  margin-right: 12px;
  transition-property: transform;
  transition-duration: 300ms;
}
.gz8l50q {
  margin-top: 17px;
}
.s6yfs {
  margin-top: 16px;
}
.oakuqlk {
  transform: rotate(-180deg);
}
.jnle1ld {
  color: #333333;
  transition-property: opacity,transform;
  transition-duration: 300ms;
  padding-top: 20px;
  margin-right: 16px;
  padding-bottom: 20px;
  margin-left: 16px;
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: #d6d6d6;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
.isgzu2m {
  opacity: 0;
  transform: translateY(-20px);
  pointer-events: none;
}
.aj8zk8 {
  position: absolute;
  left: -9999px;
  top: -9999px;
}
.karevww {
  display: inline-block;
  margin: 0;
  padding-top: 4px;
  padding-right: 8px;
  padding-bottom: 4px;
  padding-left: 8px;
  border-radius: 9999px;
  background: #c41d73;
  color: #ffffff;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  text-decoration: none;
}
.ttq6wn {
  width: 100%;
  box-sizing: border-box;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #333333;
  display: flex;
  background: #f6f6f6;
  padding-top: 14px;
  padding-right: 20px;
  padding-bottom: 13px;
  padding-left: 20px;
  border-top-width: 0;
  border-right-width: 0;
  border-left-width: 0;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: #d6d6d6;
}
.ovhhqw4 {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 100%;
}
.jquhn67 {
  display: inline-flex;
  max-width: 100%;
}
.jquhn67 * {
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.jquhn67:not(:last-child)::after {
  content: '/';
  color: #8c8c8c;
  margin-left: 16px;
  margin-right: 16px;
}
.hxmxylf {
  width: 54px;
  height: 46px;
  margin: 1px;
  box-sizing: content-box;
  display: flex;
  align-items: center;
  justify-content: center;
}
.ud9ko2o {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  flex: 1;
  text-align: center;
  cursor: default;
  margin: 2px;
}
.ky844hc {
  padding: 8px;
}
.ky844hc .react-datepicker__header {
  display: flex;
  flex-direction: column;
}
.ky844hc .react-datepicker__day-names {
  display: flex;
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
}
.ky844hc .react-datepicker__day-name {
  flex: 1;
  text-align: center;
}
.ky844hc .react-datepicker__week {
  display: flex;
  width: 100%;
}
.ky844hc .react-datepicker__day {
  flex: 1;
  text-align: center;
  outline: none;
  display: flex;
  align-items: stretch;
  justify-content: stretch;
}
.i419ey {
  display: flex;
  max-width: calc(100% - 16px);
  max-height: calc(100% - 16px);
  box-sizing: border-box;
  transition-property: opacity,transform;
  transition-duration: 250ms;
}
.u7jsfmo {
  flex: 1;
}
.le7vy7 {
  width: 100%;
  display: flex;
}
.tafana1 {
  width: 300px;
}
.qu4prk {
  width: 600px;
}
.gk7md5 {
  width: 900px;
}
.ti7vqqz {
  width: 100%;
}
.uahgkzq {
  opacity: 0;
  transform: translateY(-50%);
}
.x2ikup {
  opacity: 1;
  transform: translateY(0);
}
.mka8hrk {
  opacity: 1;
  transform: translateY(0);
}
.eneewkk {
  opacity: 0;
  transform: translateY(50%);
}
.d2561l {
  display: flex;
  align-items: center;
  height: 100%;
}
.d2561l > * + * {
  margin-left: 8px;
}
.hl8pps {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  outline: none;
  border: none;
  font: inherit;
  margin: 0;
  padding: 0;
  background: inherit;
  color: inherit;
}
.hl8pps::-moz-placeholder {
  color: #8c8c8c;
}
.hl8pps:-ms-input-placeholder {
  color: #8c8c8c;
}
.hl8pps::placeholder {
  color: #8c8c8c;
}
.n4m96mh {
  color: #8c8c8c;
  display: flex;
  align-items: center;
  height: 100%;
}
.f38r27 {
  border-radius: 3px;
  max-height: 200px;
  overflow-y: auto;
  display: block;
  margin: 0;
  padding: 0;
}
.bki4vj {
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 6px;
  padding-right: 16px;
  padding-bottom: 6px;
  padding-left: 16px;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
.tfuqhbz {
  color: #333333;
}
.jev934 {
  border: 0;
  padding: 0.01em 0 0 0;
  margin: 0;
  min-width: 0;
}
body:not(:-moz-handler-blocked) .jev934 {
  display: table-cell;
}
.mnierg {
  display: table;
  float: left;
  margin: 0;
  padding: 0;
  width: 100%;
}
.mnierg + * {
  clear: both;
}
.cs5yor8 {
  color: #717171;
}
.h1i5gs {
  color: #c60025;
}
.pigkjwz {
  position: absolute;
  right: 16px;
  bottom: 16px;
}
.v3kbd1 {
  position: relative;
}
.ylljl2 {
  background: #e63888;
  position: absolute;
  left: 0;
  width: 4px;
  transition-property: top,height;
  transition-duration: 300ms;
}
.jyxl17 {
  border-top-left-radius: 3px;
  transform: translateY(-1px);
}
.nzhmlq {
  border-bottom-left-radius: 3px;
  transform: translateY(1px);
}
.xthkrp {
  list-style-type: none;
  padding: 0;
  margin: 0;
  transform-origin: bottom;
  transition-property: margin,transform,opacity,visibility;
}
.epc98s6 {
  transition-duration: 300ms;
}
.b1ul09 {
  margin: 1px;
}
.ymuj4e {
  transform: rotateX(90deg);
  opacity: 0;
  visibility: hidden;
}
.h3xosez {
  transform: rotateX(0);
  opacity: 1;
  visibility: inherit;
}
.gzs8hq {
  width: 100%;
  text-align: left;
  padding-top: 10px;
  padding-right: 20px;
  padding-bottom: 10px;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  align-items: flex-start;
  position: relative;
}
.lph8lex {
  z-index: 1;
}
.i4ep5pi {
  margin-right: -1px;
  margin-left: 3px;
  z-index: -1;
}
.i4ep5pi > * {
  transform: translateX(-3px);
}
.mbgknvy {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
.au5jk94 {
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
}
.aacw99w {
  padding-left: 20px;
}
.y3t9v0 {
  padding-left: 52px;
}
.ckiszw {
  padding-left: 84px;
}
.ylfaxx {
  padding-left: 116px;
}
.brlsy6 {
  margin-left: 16px;
  transition-property: transform;
  transition-duration: 300ms;
}
.yszzvv {
  transform: none;
}
.knygme {
  transform: rotate(180deg);
}
.r7r3uu {
  width: 100%;
  padding: 0;
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}
.i76388 {
  flex: 1;
  display: flex;
  align-items: center;
}
.zdsz197 {
  flex-basis: 2px;
  flex-shrink: 0;
  background-image: linear-gradient(to right, #af1685, #1d4f91);
}
.p6l4znb {
  width: 1px;
  height: 32px;
}
.ckgtxku {
  white-space: nowrap;
}
.exlh7r0 {
  flex: 1;
  display: flex;
  flex-direction: row;
}
.wz9bcyg {
  padding-left: 20px;
}
.w6lpgk {
  height: 60px;
  display: flex;
  align-items: center;
}
.w2fup5 {
  overflow: hidden;
  border-width: 1px;
  border-style: solid;
  border-color: currentColor;
  border-radius: 9999px;
  box-sizing: border-box;
  height: 8px;
  background-color: #ffffff;
}
.w2fup5::-webkit-progress-bar {
  background-color: transparent;
}
.w2fup5::-webkit-progress-value {
  background-color: currentColor;
}
.w2fup5::-moz-progress-bar {
  background-color: currentColor;
}
.e1dm3i {
  color: #e63888;
}
@-webkit-keyframes cvwyz3 {
  to {
    background-position: right;
  }
}
@keyframes cvwyz3 {
  to {
    background-position: right;
  }
}
.cvwyz3 {
  background-color: currentColor;
  background-image: linear-gradient(90deg,rgba(255, 255, 255, 0.3),rgba(255, 255, 255, 0.7),rgba(255, 255, 255, 0.3),transparent,rgba(255, 255, 255, 0.3));
  background-size: 50%;
  -webkit-animation-name: cvwyz3;
          animation-name: cvwyz3;
  -webkit-animation-timing-function: linear;
          animation-timing-function: linear;
  -webkit-animation-duration: 1s;
          animation-duration: 1s;
  -webkit-animation-iteration-count: infinite;
          animation-iteration-count: infinite;
}
.tatuxmt {
  position: relative;
  width: 16px;
  height: 16px;
  border-radius: 9999px;
}
.tatuxmt:checked::after {
  content: '';
  position: absolute;
  top: 1px;
  left: 1px;
  width: 14px;
  height: 14px;
  border-radius: 9999px;
}
.tatuxmt:checked:active::after {
  box-shadow: inset 0 0 0 4px currentColor;
}
.tatuxmt:checked:not(:active)::after {
  box-shadow: inset 0 0 0 3px currentColor;
}
.q246ja {
  display: inline-flex;
  border-radius: 9999px;
  background: #f6f6f6;
  border-width: 1px;
  border-style: solid;
  border-color: #d6d6d6;
  padding: 3px;
  position: relative;
  isolation: isolate;
}
.du39zpx {
  flex: 1;
  position: relative;
  display: flex;
}
.antei6 {
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  border-radius: 9999px;
}
.xhwaag9 {
  transition-property: left, width;
  transition-duration: 150ms;
}
.v6mmch + .v6mmch {
  margin-left: 8px;
}
.cknfjrc {
  padding-top: 5px;
  padding-right: 8px;
  padding-bottom: 5px;
  padding-left: 8px;
  border-radius: 9999px;
}
.bwvj08.bwvj08 {
  background: transparent;
}
.q4kwx9e {
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  height: 20px;
}
.itoaroa {
  height: 32px;
}
.pgq9ji {
  margin: 0;
  -webkit-appearance: none;
  outline: none;
  width: 100%;
  background: transparent;
}
.pgq9ji::-webkit-slider-runnable-track {
  width: 100%;
  height: 8px;
  background: #eaeaea;
  border-width: 1px;
  border-style: solid;
  border-color: #c1c1c1;
  border-radius: 9999px;
  -webkit-transition-property: background;
  transition-property: background;
  transition-duration: 150ms;
}
.pgq9ji::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: #426da9;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 9999px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  margin-top: -7px;
  -webkit-transition-property: background,transform;
  transition-property: background,transform;
  transition-duration: 150ms;
}
.pgq9ji::-moz-range-thumb {
  background: #426da9;
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 9999px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  margin-top: -7px;
  -moz-transition-property: background,transform;
  transition-property: background,transform;
  transition-duration: 150ms;
}
.pgq9ji::-moz-range-track {
  width: 100%;
  height: 8px;
  background: #eaeaea;
  border-width: 1px;
  border-style: solid;
  border-color: #c1c1c1;
  border-radius: 9999px;
  -moz-transition-property: background;
  transition-property: background;
  transition-duration: 150ms;
}
.pgq9ji:hover:not(:disabled)::-webkit-slider-runnable-track {
  background: #f6f6f6;
}
.pgq9ji:hover:not(:disabled)::-webkit-slider-thumb {
  background: #1d4f91;
}
.pgq9ji:hover:not(:disabled)::-moz-range-track {
  background: #f6f6f6;
}
.pgq9ji:hover:not(:disabled)::-moz-range-thumb {
  background: #1d4f91;
}
.pgq9ji:focus::-webkit-slider-thumb {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25),0 0 0 1px #1d4f91;
}
.pgq9ji:focus::-moz-range-thumb {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25),0 0 0 1px #1d4f91;
}
.pgq9ji.pgq9ji:active:not(:disabled)::-webkit-slider-runnable-track {
  background: #ffffff;
}
.pgq9ji.pgq9ji:active:not(:disabled)::-webkit-slider-thumb {
  background: #123f7a;
  transform: scale(0.9);
}
.pgq9ji.pgq9ji:active:not(:disabled)::-moz-range-track {
  background: #ffffff;
}
.pgq9ji.pgq9ji:active:not(:disabled)::-moz-range-thumb {
  background: #123f7a;
  transform: scale(0.9);
}
.pgq9ji.pgq9ji.pgq9ji:disabled {
  cursor: not-allowed;
}
.pgq9ji.pgq9ji.pgq9ji:disabled::-webkit-slider-thumb {
  background: #8c8c8c;
}
.pgq9ji.pgq9ji.pgq9ji:disabled::-moz-range-thumb {
  background: #8c8c8c;
}
.g7q97c {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #717171;
  display: flex;
  justify-content: space-between;
  margin-top: -10px;
  margin-bottom: -9px;
}
.ytefze {
  border-width: 0;
  border-style: solid;
  border-color: #d6d6d6;
}
.nz1npwb {
  display: flex;
  flex-direction: column;
  transition-property: width;
  background: #f6f6f6;
  border-style: solid;
  border-right-width: 1px;
}
.evc24ge {
  flex: 1;
  overflow-x: hidden;
}
.e8d1jv {
  overflow-y: auto;
}
.c2ceyzi {
  overflow-y: hidden;
}
.zb3tp5p {
  display: flex;
  align-items: flex-start;
}
.ojghmq8 {
  transition-property: margin;
}
.xmi999v, .xmi999v > * {
  visibility: hidden;
}
.wxb86a {
  min-width: 160px;
}
.gv2vbko {
  min-width: 56px;
}
.g1ow0x {
  transition-duration: 300ms;
}
.guawec6 {
  width: 100%;
  height: 0;
  border-bottom-width: 1px;
  margin: 0;
}
.u3njo5u {
  padding-top: 12px;
  padding-right: 16px;
  padding-bottom: 12px;
  padding-left: 16px;
  line-height: 24px;
  white-space: nowrap;
  overflow: hidden;
}
.glfkpgw {
  display: flex;
  flex-shrink: 0;
}
.y3aoayi {
  transition-property: transform;
}
.s8kvey {
  transform: scaleX(-1);
}
.kfzovk {
  margin-left: 12px;
  transition-property: opacity;
  transition-duration: 300ms;
}
.vzuvfa {
  opacity: 1;
}
.iagzar {
  opacity: 0;
}
.xif0ms {
  width: 128px;
  height: 128px;
  transition-property: transform,opacity;
  transition-duration: 250ms;
  outline: none;
}
.s8nrgv {
  transform: scale(1);
  opacity: 1;
}
.ey5itt {
  transform: scale(1.5);
  opacity: 0;
}
.h1sts9 {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
  margin: 0;
  padding: 0;
  background: transparent;
  border: 0;
  outline: none;
  display: flex;
  align-items: stretch;
  text-align: center;
}
.x50kjfr {
  flex-direction: column;
}
.nr79wz {
  flex-direction: row;
}
.y5qn8fq {
  display: flex;
  align-items: center;
}
.g6k57s {
  flex-direction: column;
}
.i3r96v2 {
  flex-direction: row;
}
.qr842xy {
  flex: 1;
}
.e6yr6g {
  height: 2px;
}
.trml3m9 {
  width: 2px;
}
.ga64cgm {
  background-color: #426da9;
}
.e78zl32 {
  background-color: #8c8c8c;
}
.j60tbc {
  background-color: #883b92;
}
.y6j3po {
  background-color: #d6d6d6;
}
.cuntyw {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
}
.e9zqm94 {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 18px;
  font-weight: 400;
  line-height: 24px;
}
.wg4t0ta {
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
}
.j3b7491 {
  margin-top: 8px;
}
.irkzo4 {
  display: flex;
  align-items: center;
  margin-left: 8px;
}
.k9ws3za > * {
  flex: 1;
}
.s4w82 {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.ofqbhao {
  display: inline-flex;
  flex-direction: column;
}
.s4oo84o {
  border-radius: 9999px;
  width: 32px;
  height: 16px;
  position: relative;
}
.s4oo84o::after {
  content: '';
  position: absolute;
  border-radius: 9999px;
  transition-property: background-color,box-shadow;
  transition-duration: 64ms;
}
.s4oo84o:checked::after {
  top: calc(50% - 4px);
  left: calc(100% - 12px);
  width: 8px;
  height: 8px;
  background-color: currentColor;
}
.s4oo84o:not(:checked)::after {
  box-shadow: inherit;
}
.s4oo84o:not(:checked):focus::after {
  top: 0;
  left: 0;
  width: 16px;
  height: 16px;
  transform: scale(0.5);
}
.s4oo84o:not(:checked):not(:focus)::after {
  top: calc(50% - 4px);
  left: 4px;
  width: 8px;
  height: 8px;
}
.buf3cb {
  display: inline-block;
  margin: 0;
  text-decoration: none;
  padding-top: 3px;
  padding-right: 8px;
  padding-bottom: 3px;
  padding-left: 8px;
  border-radius: 9999px;
  border-width: 1px;
  border-color: transparent;
  border-style: solid;
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  font-weight: 400;
  line-height: 1;
}
.uh6giw {
  background-color: #eaeaea;
  color: #333333;
}
.ptekxg {
  background-color: #ffffff;
  border-color: #d6d6d6;
}
.j68thxr {
  background-color: #D0F6DB;
  color: #007a3b;
}
.lqd2jer {
  background-color: #FFF1BD;
  color: #995006;
}
.qweg4tu {
  background-color: #FFD6DD;
  color: #c60025;
}
.u8dycy {
  background-color: #f6cbea;
  color: #760056;
}
.vcg2ir {
  background-color: #ffe3ba;
  color: #995006;
}
.lpdppz {
  background-color: #d0eff8;
  color: #004759;
}
.o1kd2um {
  background-color: #c6f7f4;
  color: #005752;
}
.e242fbe {
  background: #333333;
  color: #ffffff;
  padding-top: 6px;
  padding-right: 16px;
  padding-bottom: 6px;
  padding-left: 16px;
  border-radius: 4px;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.12);
  font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  opacity: 0;
  visibility: hidden;
  transition-property: opacity,visibility;
  transition-duration: 150ms;
  transition-delay: 0,150ms;
}
.hd46un {
  opacity: 1;
  visibility: visible;
  transition-delay: 150ms,0;
}
.skgyr84 {
  width: 6px;
  height: 6px;
}
.skgyr84::after {
  content: '';
  width: 0;
  height: 0;
  position: absolute;
  top: 0;
  left: 0;
  border-width: 6px;
  border-color: transparent;
  border-style: solid;
}
[data-popper-placement*='top'] > .skgyr84 {
  bottom: -6px;
}
[data-popper-placement*='top'] > .skgyr84::after {
  left: -3px;
  border-bottom-width: 0;
  border-top-color: #333333;
}
[data-popper-placement*='right'] > .skgyr84 {
  left: -6px;
}
[data-popper-placement*='right'] > .skgyr84::after {
  top: -3px;
  border-left-width: 0;
  border-right-color: #333333;
}
[data-popper-placement*='bottom'] > .skgyr84 {
  top: -6px;
}
[data-popper-placement*='bottom'] > .skgyr84::after {
  left: -3px;
  border-top-width: 0;
  border-bottom-color: #333333;
}
[data-popper-placement*='left'] > .skgyr84 {
  right: -6px;
}
[data-popper-placement*='left'] > .skgyr84::after {
  top: -3px;
  border-right-width: 0;
  border-left-color: #333333;
}
            </style>
          </head>
          <body style="margin:0">
            <div id="navContainer"></div>
          </body>
        </html>
      `
    }),
  ],
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader:"ts-loader",
            options: {
              compilerOptions: {
                noEmit: false,
              },
            },
          },
        ],
      },
    ],
  },
});

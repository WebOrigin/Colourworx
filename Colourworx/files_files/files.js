// Created by iWeb 2.0.3 local-build-20080319

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_1:new IWShadow({blurRadius:0,offset:new IWPoint(0.0000,0.0000),color:'#ffffff',opacity:0.050000}),shadow_0:new IWShadow({blurRadius:0,offset:new IWPoint(0.0000,0.0000),color:'#ffffff',opacity:0.050000}),stroke_0:new IWEmptyStroke()});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('files_files/filesMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');fixAllIEPNGs('Media/transparent.gif');applyEffects()}

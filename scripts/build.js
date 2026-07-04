import fs from 'fs';
import path from 'path';
const dist=path.resolve('dist');
fs.rmSync(dist,{recursive:true,force:true});
fs.mkdirSync(dist,{recursive:true});
function copy(src,dst){
  const st=fs.statSync(src);
  if(st.isDirectory()){
    fs.mkdirSync(dst,{recursive:true});
    for(const f of fs.readdirSync(src)) copy(path.join(src,f), path.join(dst,f));
  } else fs.copyFileSync(src,dst);
}
copy(path.resolve('public'), dist);
fs.copyFileSync(path.resolve('index.html'), path.join(dist,'index.html'));
console.log('Build estático concluído em dist/');

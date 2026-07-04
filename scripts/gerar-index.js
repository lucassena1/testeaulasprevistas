import fs from 'fs';
import path from 'path';
const pub = path.resolve('public');
function list(dir, exts){
  const p = path.join(pub, dir);
  if(!fs.existsSync(p)) fs.mkdirSync(p,{recursive:true});
  return fs.readdirSync(p).filter(f=>exts.some(e=>f.toLowerCase().endsWith(e))).sort((a,b)=>a.localeCompare(b,'pt-BR'));
}
fs.writeFileSync(path.join(pub,'escolas.json'), JSON.stringify(list('dados',['.xlsx','.xls']), null, 2));
fs.writeFileSync(path.join(pub,'professores.json'), JSON.stringify(list('professores',['.csv']), null, 2));
fs.writeFileSync(path.join(pub,'gre.json'), JSON.stringify(list('gre',['.xlsx','.xls','.csv']), null, 2));
fs.writeFileSync(path.join(pub,'evasao.json'), JSON.stringify(list('evasao',['.csv']), null, 2));
console.log('Índices gerados:', list('dados',['.xlsx','.xls']).length, 'escolas', list('professores',['.csv']).length, 'professores', list('evasao',['.csv']).length, 'evasao');

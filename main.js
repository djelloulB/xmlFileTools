const fs = require('fs'); 
try{ 
  var start = new Date().getTime();
  console.log(`Début de traitement : ${new Date(start)}`);
  const xml = fs.readFileSync('./in/FINAL2.xml', 'utf8');
  //var tag = /<{0,1}[^a-z][^><]*>/m;
  var startHeader = /<{0,1}(header)[^><]*>/m;
  var endHeader = /<{0,1}(\/header)[^><]*>/m;
  var xmlArr = xml.split('\n');

  let newXml="";
  for (var i = 0 ; i< xmlArr.length ; i++) {

    if (xmlArr[i] != undefined) {
      if( !xmlArr[i].match(startHeader)) newXml += xmlArr[i] + "\n";
      
      if ( xmlArr[i].match(startHeader) ) {
       while (!xmlArr[i].match(endHeader ) ){
          newXml +="";
           i++;
        }
      } 
    }
  }
  /**
 * Write File
 */  
  fs.writeFileSync('./out/new_xml.xml', newXml.toString());
  console.log("fichier écrit avec succès")
  var end = new Date().getTime();
  console.log(`Fin de traitement : ${new Date(end)}`);
  console.log(`Temps de traitement : ${end - start} millisecondes`);
} catch (err) {
console.error(err);
}
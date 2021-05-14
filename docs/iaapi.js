const uri = 'https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec';
const id = '1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA';
const sheet = 'Studio';
const endpoint = `${uri}?id=${id}&sheet=${sheet}`;
//https://script.google.com/macros/s/AKfycbxyacpN8y4nxSAnU0Eji6E_rBRDFTY7YoWWFa0clY5ELRhskgpt/exec?id=1BpGnuwC4lZf9G2yFyiSrxbJuGO8gviV8mr-I2D3x4vA&sheet=Studio

const renderJson = (json) => {
  const studios = json.records;
  
  studios.pop();//pop() メソッドは、配列から最後の要素を取り除き、その要素を返します。このメソッドは配列の長さを変化させます。
  
  studios.forEach(studio => {//forEach() メソッドは与えられた関数を、配列の各要素に対して一度ずつ実行します。
   const studioDiv = document.createElement('div');//HTML 文書において、 document.createElement() メソッドは tagName で指定された HTML 要素を生成し、または tagName が認識できない場合は HTMLUnknownElement を生成します。

   const studioType = document.createElement("div");
   studioType.className = 'studio-type';
   
   const studioTitle = document.createElement("span");
   studioTitle.className = 'studio-title';//className は要素の class 属性の値の取得 / 設定に用います。
   studioTitle.textContent = studio['name-ja'];//textContent は Node のプロパティで、ノードおよびその子孫のテキストの内容を表します。

   const studioTitleEn = document.createElement("span");
   studioTitleEn.className = 'studio-title-en';
   studioTitleEn.textContent = studio['name-en'];

   const coreType = document.createElement("span");
   coreType.className = 'core-type';
   coreType.textContent = studio['core-ja'];

   const coreTypeEn = document.createElement("span");
   coreTypeEn.className = 'core-type-en';
   coreTypeEn.textContent = studio['core-en'];

   const faculty = document.createElement("span");
   faculty.className = 'faculty';
   faculty.textContent = studio['faculty-ja'];

   studioDiv.appendChild(studioTitle);//Node.appendChild() メソッドは、特定の親ノードの子ノードリストの末尾にノードを追加します。追加しようとしたノードが既に存在していたら、それは現在の親ノードから除かれ、新しい親ノードに追加されます（他のノードに追加する前にそのノードを親ノードから削除する必要はありません）。
   studioDiv.appendChild(studioTitleEn);
   studioDiv.appendChild(coreType);
   studioDiv.appendChild(coreTypeEn);
   studioDiv.appendChild(faculty);

   studioType.appendChild(coreType);
   studioType.appendChild(coreTypeEn);
   studioType.appendChild(faculty);

   document.getElementById('studios').appendChild(studioType);


   document.getElementById('studios').appendChild(studioDiv);//Document の getElementById() メソッドは、 id プロパティが指定された文字列に一致する要素を表す Element オブジェクトを返します。要素の ID は指定されていれば固有であることが求められているため、特定の要素にすばやくアクセスするには便利な方法です。
 });
  document.getElementById('result').textContent = JSON.stringify(json, null, 2);//余白の数//JSON.stringify() メソッドは、ある JavaScript のオブジェクトや値を JSON 文字列に変換します。置き換え関数を指定して値を置き換えたり、置き換え配列を指定して指定されたプロパティのみを含むようにしたりすることもできます。
}

const getData = async () => {//AsyncFunction コンストラクターは、新しい非同期関数オブジェクトを生成します。 JavaScript では、すべての非同期関数が実際に AsyncFunction オブジェクトです。
  try {
    const response = await fetch(endpoint);//await 式は async function の実行を一時停止し、Promise の解決または拒否を待ちます。解決した後に async function の実行を再開します。再開するときに await 式は解決された Promise にラップされた値を返します。
    if (response.ok) {
      const jsonResponse = await response.json();
			renderJson(jsonResponse);
    }
  }
  catch (error) {
    console.log(error);
  }
}

getData();



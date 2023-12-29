document.addEventListener("DOMContentLoaded", function () {

    let corDasPaletas = [];  // Iniciando com um Array vazio.
    const button = document.getElementById("button"); // Pegando o botão para alterar a ordem das paletas na tela.

    // Carregar dados do arquivo data.json
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            corDasPaletas = data; // Atualizar o array com os dados carregados
            atualizarPaletas();   // Atualizar paletas após carregar os dados
        })
        .catch(error => {
            console.error('Houve um erro ao carregar o arquivo data.json:', error);
        });

    //Evento de clicar no botão para alterar a posição da paleta na tela
    button.addEventListener('click', function () {
        alterarPosicaoAleatoria();
        embaralhar();
    })

    // Função para sortear a posição da paleta na tela
    function embaralhar(array) {
        let currentIndex = array.length, randomIndex;

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    // Função para alterar a posição da paleta na tela
    function alterarPosicaoAleatoria() {
        const div1 = document.getElementById('pallete_01');
        const div2 = document.getElementById('pallete_02');
        const div3 = document.getElementById('pallete_03');
        const div4 = document.getElementById('pallete_04');
        const div5 = document.getElementById('pallete_05');

        const divs = [div1.outerHTML, div2.outerHTML, div3.outerHTML, div4.outerHTML, div5.outerHTML];

        const EmbaralharDivs = embaralhar(divs);

        div1.outerHTML = EmbaralharDivs[0];
        div2.outerHTML = EmbaralharDivs[1];
        div3.outerHTML = EmbaralharDivs[2];
        div4.outerHTML = EmbaralharDivs[3];
        div5.outerHTML = EmbaralharDivs[4];
        copiarPaleta();
    }

    // Função para escolher uma paleta aleatória
    function escolherPaletaAleatoria() {
        const indiceAleatorio = Math.floor(Math.random() * corDasPaletas.length);
        return corDasPaletas[indiceAleatorio];
    }

    // Função para atualizar as paletas
    function atualizarPaletas() {
        const paletaAleatoria = escolherPaletaAleatoria();

        const container1 = document.querySelector(".palette_color_01"); // atualizando a primeira paleta
        const container2 = document.querySelector(".palette_color_02"); // atualizando a segunda paleta
        const container3 = document.querySelector(".palette_color_03"); // atualizando a terceira paleta
        const container4 = document.querySelector(".palette_color_04"); //  atualizando a quarta paleta
        const container5 = document.querySelector(".palette_color_05"); // atualizando a quinta paleta
        const cores = paletaAleatoria.colorPalette;

        if (container1) {
            container1.querySelector("h3").textContent = cores[0];
            container1.querySelector("h4").textContent = paletaAleatoria.name;
            const fundo = document.querySelector('#pallete_01');
            fundo.style.backgroundColor = cores[0];
        }

        if (container2) {
            container2.querySelector("h3").textContent = cores[1];
            container2.querySelector("h4").textContent = paletaAleatoria.name;
            const fundo = document.querySelector('#pallete_02');
            fundo.style.backgroundColor = cores[1];
        }

        if (container3) {
            container3.querySelector("h3").textContent = cores[2];
            container3.querySelector("h4").textContent = paletaAleatoria.name;
            const fundo = document.querySelector('#pallete_03');
            fundo.style.backgroundColor = cores[2];
        }

        if (container4) {
            container4.querySelector("h3").textContent = cores[3];
            container4.querySelector("h4").textContent = paletaAleatoria.name;
            const fundo = document.querySelector('#pallete_04');
            fundo.style.backgroundColor = cores[3];
        }

        if (container5) {
            container5.querySelector("h3").textContent = cores[4];
            container5.querySelector("h4").textContent = paletaAleatoria.name;
            const fundo = document.querySelector('#pallete_05');
            fundo.style.backgroundColor = cores[4];
        }
       
    }

    function copiarPaleta() {
        const imgIcon = document.querySelector('.palette_color_01 img');
        const h3Value = document.querySelector('.palette_color_01 h3');
        const imgIcon2 = document.querySelector('.palette_color_02 img');
        const h3Value2 = document.querySelector('.palette_color_02 h3');
        const imgIcon3 = document.querySelector('.palette_color_03 img');
        const h3Value3 = document.querySelector('.palette_color_03 h3');
        const imgIcon4 = document.querySelector('.palette_color_04 img');
        const h3Value4 = document.querySelector('.palette_color_04 h3');
        const imgIcon5 = document.querySelector('.palette_color_05 img');
        const h3Value5 = document.querySelector('.palette_color_05 h3');
        imgIcon.addEventListener('click', function () {
            // Elemento de input para armazenar temporariamente o valor
            const tempInput = document.createElement('input');
            tempInput.value = h3Value.textContent.trim();  // Pega o valor do h3
    
            // Adicionar o elemento de input à página
            document.body.appendChild(tempInput);
    
            // Selecionar o conteúdo do input
            tempInput.select();
            tempInput.setSelectionRange(0, 99999); // Para dispositivos móveis
    
            // Copiar o conteúdo selecionado para a área de transferência
            document.execCommand('copy');
    
            // Remover o input temporário da página
            document.body.removeChild(tempInput);
    
            // Feedback ao usuário (opcional)
            alert('Valor copiado para a área de transferência!');
        });
        
        imgIcon2.addEventListener('click', function () {
            // Elemento de input para armazenar temporariamente o valor
            const tempInput = document.createElement('input');
            tempInput.value = h3Value2.textContent.trim();  // Pega o valor do h3
    
            // Adicionar o elemento de input à página
            document.body.appendChild(tempInput);
    
            // Selecionar o conteúdo do input
            tempInput.select();
            tempInput.setSelectionRange(0, 99999); // Para dispositivos móveis
    
            // Copiar o conteúdo selecionado para a área de transferência
            document.execCommand('copy');
    
            // Remover o input temporário da página
            document.body.removeChild(tempInput);
    
            // Feedback ao usuário (opcional)
            alert('Valor copiado para a área de transferência!');
        });
    
        imgIcon3.addEventListener('click', function () {
            // Elemento de input para armazenar temporariamente o valor
            const tempInput = document.createElement('input');
            tempInput.value = h3Value3.textContent.trim();  // Pega o valor do h3
    
            // Adicionar o elemento de input à página
            document.body.appendChild(tempInput);
    
            // Selecionar o conteúdo do input
            tempInput.select();
            tempInput.setSelectionRange(0, 99999); // Para dispositivos móveis
    
            // Copiar o conteúdo selecionado para a área de transferência
            document.execCommand('copy');
    
            // Remover o input temporário da página
            document.body.removeChild(tempInput);
    
            // Feedback ao usuário (opcional)
            alert('Valor copiado para a área de transferência!');
        });
    
        imgIcon4.addEventListener('click', function () {
            // Elemento de input para armazenar temporariamente o valor
            const tempInput = document.createElement('input');
            tempInput.value = h3Value4.textContent.trim();  // Pega o valor do h3
    
            // Adicionar o elemento de input à página
            document.body.appendChild(tempInput);
    
            // Selecionar o conteúdo do input
            tempInput.select();
            tempInput.setSelectionRange(0, 99999); // Para dispositivos móveis
    
            // Copiar o conteúdo selecionado para a área de transferência
            document.execCommand('copy');
    
            // Remover o input temporário da página
            document.body.removeChild(tempInput);
    
            // Feedback ao usuário (opcional)
            alert('Valor copiado para a área de transferência!');
        });
    
        imgIcon5.addEventListener('click', function () {
            // Elemento de input para armazenar temporariamente o valor
            const tempInput = document.createElement('input');
            tempInput.value = h3Value5.textContent.trim();  // Pega o valor do h3
    
            // Adicionar o elemento de input à página
            document.body.appendChild(tempInput);
    
            // Selecionar o conteúdo do input
            tempInput.select();
            tempInput.setSelectionRange(0, 99999); // Para dispositivos móveis
    
            // Copiar o conteúdo selecionado para a área de transferência
            document.execCommand('copy');
    
            // Remover o input temporário da página
            document.body.removeChild(tempInput);
    
            // Feedback ao usuário (opcional)
            alert('Valor copiado para a área de transferência!');
        });
    
    }

    copiarPaleta();
});

window.onload = () => {
    const $botoesLike = document.querySelectorAll(".cardbutton--heart");
    const $iconsLike = document.querySelectorAll(".iconcontainer--likecontainer");
    const $botoesSave = document.querySelectorAll(".cardbutton--save");
    const $iconsSave = document.querySelectorAll(".iconcontainer--savecontainer");
    const $botoesMoreOptions = document.querySelectorAll(".moreoptions");
    const $commentAreas = document.querySelectorAll(".formcomment__text");
    const $publishButtons = document.querySelectorAll(".pubblishbutton");
    const $moreOptionsContainer = document.querySelector("#moreoptionscontainer");
    const $moreOptionsPanel = document.querySelector("#moreoptionspanel");
    const $content = document.querySelector(".content");
    const $cancelOption = document.querySelectorAll(".followingoption")[document.querySelectorAll(".followingoption").length-1];

    $botoesLike.forEach(($botaoLike, index) => {
        $botaoLike.addEventListener("click", function(){
            toggleButton($botaoLike, $iconsLike[index], "Curtir", "Descurtir");
        });
    });
    $botoesSave.forEach(($botaoSave, index) => {
        $botaoSave.addEventListener("click", function(){
            toggleButton($botaoSave, $iconsSave[index], "Salvar", "Remover dos Salvos");
        });
    });

    $commentAreas.forEach(($commentText, index) => {
        $commentText.addEventListener("input", function(){
            if(isEmpty($commentText.value) || 
                $commentText.value === null || 
                $commentText.value === undefined) {
                    $publishButtons[index].classList.remove("pubblishbutton--active");
            } else {
                $publishButtons[index].classList.add("pubblishbutton--active");
            } 
        });
    });

    function isEmpty(str) {
        return !str.trim().length;
    }

    function toggleButton($button, $icon, state1, state2){
        $icon.classList.toggle("iconcontainer--active");
        $button.title == state1 ? $button.title = state2 : $button.title = state1;
    }
    $botoesMoreOptions.forEach(($botaoMoreOptions) => {
        $botaoMoreOptions.addEventListener("click", function(){          
            $moreOptionsPanel.classList.add("moreoptionspanel--visible");            
            $content.classList.add("content--inactive");

            const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
            const $body = document.body;
            $body.style.position = 'fixed';
            $body.style.top = `-${scrollY}`;

        });
    });

    $cancelOption.addEventListener("click", function(){
        hideMoreOptionsPanel();
    });

    $moreOptionsPanel.addEventListener('click', function(event) {
        let isClickInsideElement = $moreOptionsContainer.contains(event.target);
        if (!isClickInsideElement) {
            hideMoreOptionsPanel();
        }
    });

    function hideMoreOptionsPanel() {
        const $body = document.body;
        const scrollY = $body.style.top;
        $body.style.position = '';
        $body.style.top = '';
        window.scrollTo(0, parseInt(scrollY || '0') * -1);

        $body.style.position = '';
        $moreOptionsPanel.classList.remove("moreoptionspanel--visible");
        $content.classList.remove("content--inactive");
    }
    window.addEventListener('scroll', () => {
        document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
    });
}
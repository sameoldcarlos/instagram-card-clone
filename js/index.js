window.onload = () => {
    const $botaoLike = document.querySelector("#likebutton");
    const $iconlike = document.querySelector("#likeicon");
    const $botaoSave = document.querySelector("#savebutton");
    const $iconSave = document.querySelector("#saveicon");
    const $commentText = document.querySelector("#commenttext");
    const $publish = document.querySelector("#pubblish");

    $botaoLike.addEventListener("click", function(){
        toggleButton($botaoLike, $iconlike, "Curtir", "Descurtir");
    });
    $botaoSave.addEventListener("click", function(){
        toggleButton($botaoSave, $iconSave, "Salvar", "Remover dos Salvos");
    });

    $commentText.addEventListener("input", function(){
        if(isEmpty($commentText.value) || 
            $commentText.value === null || 
            $commentText.value === undefined) {
                $publish.classList.remove("pubblishbutton--active");
            } else {
                $publish.classList.add("pubblishbutton--active");
            } 
    });

    function isEmpty(str) {
        return !str.trim().length;
    }

    function toggleButton($button, $icon, $state1, $state2){
        $icon.classList.toggle("iconcontainer--active");
        $button.title == $state1 ? $button.title = $state2 : $button.title = $state1;
    }
}
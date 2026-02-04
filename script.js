let currentCursor = document.body.style.cursor
let isBoxAlreadyExist = false
let isShowedBox = false
let createBox
let countOfLeaves = 0;
let countOfTrunk = 0;
let countOfSoilWithGrass = 0;
let countOfSoil = 0;
let countOfStone = 0;
let countOfDiamond = 0;
let countOfGold = 0;
let countOfCoal = 0;
let countOfCrystal = 0;

const main = document.getElementById('main-id')
function startPosition(){
    for (let i = 0; i <= 999; i++){
    const createDiv = document.createElement("div");
    createDiv.className = "sky"
    if (i === 325 || i === 326 || i === 337 || i === 338 || i === 344 || i === 345 || i === 364 || i === 365 || i === 366 || i === 367
        || i === 376 || i === 377 || i === 378 || i === 379 || i === 383 || i === 384 || i === 385 || i === 386 || i === 403 || i === 404
        || i === 405 || i === 406 || i === 407 || i === 408 || i === 415 || i === 416 || i === 417 || i === 418 
        || i === 419 || i === 420 || i === 422 || i === 423 || i === 424 || i === 425 || i === 426 || i === 427 
        || i === 443 || i === 444 || i === 445 || i === 446 || i === 447 || i === 448 || i === 452 || i === 491 || i === 492 || i === 493
        ){
        createDiv.className = "leaves"
    }
    if (i === 485 || i === 486 || i === 525 || i === 526 || i === 565 || i === 566 || i === 605 || i === 606 || i === 532 ||
        i === 572 || i === 612 || i === 457 || i === 458 || i === 497 || i === 498 || i === 537 || i === 538 || i === 577 ||
        i === 578 || i === 464 || i === 465 || i === 504 || i === 505 || i === 545 || i === 544 || i === 584 || i === 585 
        ){
        createDiv.className = "trunk"
    }
    if (i === 431 || i === 433 || i === 476){
        createDiv.className = "monster_face"
    }
    if (i === 471 || i === 511 || i === 551 || i === 591 || i === 473 || i === 513 || i === 553 || i === 516 || i === 593 || i === 556 || i === 595 || i === 597){
        createDiv.className = "monster_body"
    }
    if (i >= 615 && i <= 654){
        createDiv.className = "soil_with_grass"
    }
    if (i >= 655 && i <= 763){
        createDiv.className = "soil"
    }
    if (i >= 764 && i <= 999){
        createDiv.className = "stone"
    }
    if (i === 786 || i === 799 || i === 846 || i === 877 || i === 880 || i === 892 || i === 923 || i === 924 || i === 930 || i === 936 || 
        i === 937 || i === 939 || i === 940 || i === 941 || i === 955 || i === 954 || i === 950 || i === 961 || i === 962 || i === 965 || 
        i === 967 || i === 968 || i === 969 || i === 971 || i === 973 || i === 974 || i === 975 || i === 978 || i === 982 || i === 983 || 
        i === 984 || i === 985 || i === 987 || i === 988 || i === 989 || i === 991 || i === 992 || i === 993 || i === 996 || i === 998
        ){
        createDiv.className = "diamond"
    }
    if (i === 787 || i === 817 || i === 818 || i === 823 || i === 825 || i === 828 || i === 833 || i === 837 || i === 842 || i === 843 || 
        i === 849 || i === 851 || i === 853 || i === 859 || i === 861 || i === 864 || i === 869 || i === 875 || i === 884 || i === 885 || 
        i === 890 || i === 894 || i === 895 || i === 896 || i === 906 || i === 912 || i === 917 || i === 918 || i === 919 || i === 920 || 
        i === 921 || i === 926 || i === 927 || i === 928 || i === 932 || i === 942 || i === 951 || i === 980 || i === 990 || i === 994
        ){
        createDiv.className = "gold"
    }
    if (i === 796 || i === 814 || i === 815 || i === 816 || i === 819 || i === 821 || i === 832 || i === 838 || i === 840 || i === 841 || 
        i === 845 || i === 844 || i === 847 || i === 850 || i === 852 || i === 863 || i === 866 || i === 868 || i === 870 || i === 874 || 
        i === 878 || i === 879 || i === 882 || i === 886 || i === 888 || i === 891 || i === 900 || i === 902 || i === 905 || i === 907 || 
        i === 911 || i === 915 || i === 929 || i === 933 || i === 938 || i === 944 || i === 949 || i === 953 || i === 963 || i === 977
        ){
        createDiv.className = "coal"
    }
    if (i === 791 || i === 798 || i === 822 || i === 848 || i === 856 || i === 857 || i === 860 || i === 872 || i === 881 || i === 883 || 
        i === 887 || i === 889 || i === 893 || i === 898 || i === 901 || i === 904 || i === 909 || i === 910 || i === 913 || i === 914 || 
        i === 922 || i === 925 || i === 931 || i === 934 || i === 935 || i === 943 || i === 945 || i === 946 || i === 947 || i === 948 || 
        i === 956 || i === 960 || i === 964 || i === 966 || i === 970 || i === 972 || i === 979 || i === 995 || i === 997 || i === 999
        ){
        createDiv.className = "crystal"
    }

    createDiv.addEventListener("click", ()=>{
        if ((currentCursor === "ax") && (createDiv.className === "trunk" || createDiv.className === "leaves")){
            if (createDiv.className === "trunk"){
                countOfTrunk ++
            } else {
                countOfLeaves ++
            }
            createDiv.className = "sky"
        } else if ((currentCursor === "sword") && (createDiv.className === "monster_face" || createDiv.className === "monster_body")){
            createDiv.className = "sky"
        } else if ((currentCursor === "spade") && (createDiv.className === "soil_with_grass" || createDiv.className === "soil")){
            if (createDiv.className === "soil_with_grass"){
                countOfSoilWithGrass ++
            } else {
                countOfSoil ++
            }
            createDiv.className = "sky"
        } else if ((currentCursor === "pickaxe") && (createDiv.className === "stone" || createDiv.className === "diamond" || createDiv.className === "gold" || createDiv.className === "coal" || createDiv.className === "crystal")){
            if (createDiv.className === "stone"){
                countOfStone ++
            } else if (createDiv.className === "diamond") {
                countOfDiamond ++
            } else if (createDiv.className === "gold") {
                countOfGold ++
            } else if (createDiv.className === "coal"){
                countOfCoal ++
            } else {
                countOfCrystal ++
            }
            createDiv.className = "sky"
        }
    })
    main.appendChild(createDiv);
    }

    document.body.style.cursor = "context-menu";
}

startPosition()

const resetGame = document.getElementById("restart_box");
resetGame.addEventListener("click", restartFunction);
function restartFunction() {
  window.location.reload()
}

const getAx = document.getElementById("ax");
getAx.addEventListener("click", ()=>{
    document.body.style.cursor = `url(images/ax_icon.ico), auto`;
    currentCursor = "ax"
});

const getSpade = document.getElementById("spade");
getSpade.addEventListener("click", ()=>{
    document.body.style.cursor = `url(images/shovel_icon.ico), auto`;
    currentCursor = "spade"
});

const getPickaxe = document.getElementById("pickaxe");
getPickaxe.addEventListener("click", ()=>{
    document.body.style.cursor = `url(images/pickaxe_icon.ico), auto`;
    currentCursor = "pickaxe"
});

const getSword = document.getElementById("sword");
getSword.addEventListener("click", ()=>{
    document.body.style.cursor = `url(images/sword_icon.ico), auto`;
    currentCursor = "sword"
});

const getBox = document.getElementById("box");
getBox.addEventListener("click", ()=>{
    if (! isBoxAlreadyExist){
        createBox = document.createElement("div");
        createBox.className = "box";
        main.appendChild(createBox);
        isBoxAlreadyExist = true;
    } else {
        if (createBox.style.display === "none"){
            createBox.style.display = "block"
        } else {
            createBox.style.display = "none"
        }
    }
});
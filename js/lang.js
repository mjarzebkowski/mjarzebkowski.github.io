function MJcleanAll(){
    $('.MJaboutme').hide();
    $('.MJfrontend').hide();
    $('.MJbackend').hide();
    $('.MJelectronics').hide();
    $('.MJadministration').hide();
    $('.MJhacking').hide();
};

function MJsetAboutMe(){
    MJcleanAll();
    $('.MJaboutme').show();
};

function MJsetFrontEnd(){
    MJcleanAll();
    $('.MJfrontend').show();
};

function MJsetBackEnd(){
    MJcleanAll();
    $('.MJbackend').show();
};

function MJsetAdministration(){
    MJcleanAll();
    $('.MJadministration').show();
};

function MJsetElectronics(){
    MJcleanAll();
    $('.MJelectronics').show();
};

function MJsetHacking(){
    MJcleanAll();
    $('.MJhacking').show();
};

function MJsetLangPL(){
    $('.pl').show();
    $('.en').hide();
};

function MJsetLangEN(){
    $('.pl').hide();
    $('.en').show();
};
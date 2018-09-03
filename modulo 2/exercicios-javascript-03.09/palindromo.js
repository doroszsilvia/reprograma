function isPalindrome( palavra ) {

    palavra = palavra.replace(' ', '');
    
    if ( palavra === palavra.split('').reverse().join('') ) {
        return true;
    }
    return false;

}

isPalindrome('ola galo');
isPalindrome('lol');
isPalindrome('ndasdasiodsa');
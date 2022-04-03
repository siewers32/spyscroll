const makeNavLinksSmooth = ( ) => {
    const navLinks = document.querySelectorAll( '.nav-link' );

    for ( let n in navLinks ) {
        if ( navLinks.hasOwnProperty( n ) ) {
            navLinks[ n ].addEventListener( 'click', e => {
                e.preventDefault( );
                document.querySelector( navLinks[ n ].hash )
                    .scrollIntoView( {
                        behavior: "smooth"
                    } );
            } );
        }
    }
}

const spyScrolling = ( ) => {
    const sections = document.querySelectorAll( '.hero-bg' );

    window.onscroll = ( ) => {
        const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
        const logo = document.querySelector('#logo');
        if(scrollPos > 50) {
            logo.classList.remove( 'logo_standard' );
            logo.classList.add( 'logo_small' );
        } else {
            logo.classList.remove('logo_small');
            logo.classList.add( 'logo_standard' );
        }
        for ( let s in sections ) {
            if (sections.hasOwnProperty(s) && sections[s].offsetTop <= (scrollPos + 100)) {
                const id = sections[s].id;
                for (let a of document.querySelectorAll('.active')) {
                    a.classList.remove('active');
                }
                for (let f of document.querySelectorAll(`a[href*=${id}]`)) {
                    f.classList.add('active');
                }
            }
        }
    }
}

makeNavLinksSmooth( );
spyScrolling( );
import React from 'react';
import './photography.css';

const photos = [
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczP7lS50qn4euXxcOl5gv_d01LkAG2dybZS4yz9r05Pvogb2Tqa3CoAWepReMR3nXX1h_YWJcy_5WTraD0HdfAN_jVpkSwhfAt9Jw8OwP0aGQMUrU9fLQv9MZTLFdEKnwP9dUL0pTybPsu9wzu76A7Lw9A=w1146-h1716-s-no-gm?authuser=0', alt: 'Photo 1' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczPUSKvrWe-54SUXRwqCyv3hAeE_-mHD-4llxWN5K6Zl37g_7c3d_SIchYI_ZtyDNWD2z0eRNNCMFiQgbpsaeuzYbqTij_U9WJhdtRCZACtWa-mORAJ7z0i3IAJUqfxmJOsBbqAlblTJJYK5qEPV4is_dw=w2570-h1716-s-no-gm?authuser=0', alt: 'Photo 2' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczPu8ApGjgtIKOvgJ69caEmenFUEA9TdGCXGlVhy2M41Jjeuq3I2SrH3Z_MBU6NpgDuSfG7HnTj2v5qU96RYGw26RIaiTgpmp_IyYujPa71jkeMXRqZweag_1W-gymhNy0LfdKw1_YSrhbQJwrD4ZsoS4Q=w2570-h1716-s-no-gm?authuser=0', alt: 'Photo 3' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczMpQq2lf3ItOOdO9vmB6k15RjIXj-vM7-Liym_CUAGzISQP0OnI5sFMS24etDM9lrFyZNmWeZawtyf0Vv5gDlrfWZFk9Z0VW5F-UxDQSHGX0hQOfyjpk1Zya2ebK0O-VwFNwI8IJqP-LWxUOAeDQiJDZw=w2574-h1716-s-no-gm?authuser=0', alt: 'Photo 4' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczO7uF7Kx9if5Z3qt06047BNSqWZBb-O7qNoTsU23TVb1JQKSJv2OCeC_smU4ei_yQy_b2sgyV3hpmBPEXSgXsaCeA8XtBlgV_1cnyNxzd1cIKl-6Edd6eVcENg9utyTHjEh3YNYufA7sxJol7IG9YB4uA=w2570-h1716-s-no-gm?authuser=0', alt: 'Photo 5' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczOEt-8KgoYda0PGfAPfDGorrBplklF2uAFWEFRGV9vfM6VPqnfhvDcgzb2xyDGnoCuLBz0UZikol1yjhr9LaUU2c0ZLjHUUa6QGF64FEWUpDqGWtxh8fUlEbLsJsz4ECheY0McKaktyV8cIX88ZfIHLEw=w2570-h1716-s-no-gm?authuser=0', alt: 'Photo 6' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczOva0vaXT0d5f9RTezp36CYD4f4wFasQ5jvolD-gTOimm-DokhcvFHi7lEL-4J8698ZpEeLu7ExeXebsfwUJylsBITD_u1ak3heiOwvtSivGIcdwgobGAPkcm1A9eSQHyqMnrL-_KPT5njc6dAsuNu7wg=w2570-h1716-s-no-gm?authuser=0', alt: 'Photo 7' },
    { src: 'https://lh3.googleusercontent.com/pw/AP1GczOvrbyyMpUGn1TZhO5tmY3de_UKyn9pACEDqN_z_ZeSVsLwC4YM4WFeYAa4RqJOkzTnvG6-IBsRBZvxU2JCM6UmoBwt97XC3MQ0V1oV3CF0jCmnozlDvWzbgSgHybtb5Ct9GpUjZYIVIsJE97u4NdSoFg=w2570-h1716-s-no-gm?authuser=0', alt: 'Photo 7' },

    // Add more photos as needed
];

const Photography = () => {
    return (
        <div className="photography">
            <h1>Photography Portfolio</h1>
            <div className="gallery">
                {photos.map((photo, index) => (
                    <img key={index} src={photo.src} alt={photo.alt} className="gallery-photo" />
                ))}
            </div>
        </div>
    );
};

export default Photography;

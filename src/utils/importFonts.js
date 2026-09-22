import localFont from 'next/font/local';

export const helvetica = localFont({
    src: [
        {
            path: '../fonts/HelveticaNeue-Medium-11.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../fonts/HelveticaNeue-Bold-02.ttf',
            weight: '700',
            style: 'normal',
        },
    ],
    variable: '--font-helvetica',
    display: 'swap',
});

export const geist = localFont({
    src: '../fonts/GeistMono-Medium.ttf',
    weight: '500',
    style: 'normal',
    variable: '--font-geist',
    display: 'swap',
});

export const baskerville = localFont({
    src: '../fonts/Baskerville-SemiBold-05.ttf',
    weight: '600',
    style: 'normal',
    variable: '--font-baskerville',
    display: 'swap',
});

export const font = {
    variable: `${helvetica.variable} ${geist.variable} ${baskerville.variable}`,
};
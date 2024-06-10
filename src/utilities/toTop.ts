export const toTop = () => {
    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo({ top: 0 });
    document.documentElement.style.scrollBehavior = 'smooth';
}

export const toTopSmooth = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
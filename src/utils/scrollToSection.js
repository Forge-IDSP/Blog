export const scrollToSection = (sectionId) => {
    if (window.location.pathname !== '/') {
        window.location.href = `/#${sectionId}`;
        setTimeout(() => {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    } else {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }
};


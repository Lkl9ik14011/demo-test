import { lazy } from 'react';

const LazyWithRetry = (componentImport) =>
    lazy(async () => {
        let pageHasBeenForceRefreshed = localStorage.getItem('page-has-been-force-refreshed') || 'false';
        pageHasBeenForceRefreshed = JSON.parse(pageHasBeenForceRefreshed);

        try {
            const component = await componentImport();

            localStorage.setItem('page-has-been-force-refreshed', 'false');

            return component;
        } catch (error) {
            if (pageHasBeenForceRefreshed) {
                throw error;
            }
            localStorage.setItem('page-has-been-force-refreshed', 'true');
            return window.location.reload();
        }
    });

export default LazyWithRetry;
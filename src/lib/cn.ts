export const cn = (...inputs: (string | Record<string, boolean>)[]): string => {
    const classes = new Set<string>();

    inputs.forEach((input) => {
        if (typeof input === 'string') {
            input.split(' ').forEach((className) => {
                if (className) {
                    classes.add(className);
                }
            });
        } else if (typeof input === 'object' && input !== null) {
            Object.keys(input).forEach((key) => {
                if (input[key]) {
                    classes.add(key);
                }
            });
        }
    });

    return Array.from(classes).join(' ');
};


export const validateToken = (header: string): boolean => {
    const expectedApiKey = 'Bearer pk_test_LsRb12fdsvdew21';
    const apiKey = header;
    return apiKey === expectedApiKey;
};
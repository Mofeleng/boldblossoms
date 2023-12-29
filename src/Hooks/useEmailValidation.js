import { useState } from 'react';

const useEmailValidation = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(email);
        return isValidEmail;
};

export default useEmailValidation;

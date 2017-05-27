var isValidEmail = require('../validate.js').isValidEmail,
    expect       = require('chai').expect;

describe('isValidEmail API Tests', function () {
    describe('Valid tests for isValidEmail API', function () {
        it('test@test.co.in is a valid email', function () {
            expect(isValidEmail('test@test.co.in')).to.be.true;
        });

        it('test@test.com is a valid email', function () {
            expect(isValidEmail('test@test.com')).to.be.true;
        });
    });

    describe('Invalid tests for isValidEmail API', function () {
        it('null is not a valid email', function () {
            expect(isValidEmail(null)).to.be.false;
        });

        it('undefined is not a valid email', function () {
            expect(isValidEmail(undefined)).to.be.false;
        });

        it('Empty string is not a valid email', function () {
            expect(isValidEmail('')).to.be.false;
        });

        var email = "qwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwerty@gmail.com";
        it('Email with length greater than 254 characters is not a valid email', function () {
            expect(isValidEmail(email)).to.be.false;
        });

        it('test@test is not a valid email', function () {
            expect(isValidEmail('test@test')).to.be.false;
        });

        var domain = 'qwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwerty@gmail.com'

        it('subdomain[0] is greater than 64 characters is not a valid email', function () {
            expect(isValidEmail(domain)).to.be.false;
        });

        var domain1 = 'hello@qwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwerty.com';

        it('subdomain[1] is greater than 64 characters is not a valid email', function () {
            expect(isValidEmail(domain1)).to.be.false;
        });

        var domain2 = 'hello@gaurav.qwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwerty.com';

        it('subdomain[2] is greater than 64 characters is not a valid email', function () {
            expect(isValidEmail(domain2)).to.be.false;
        });

        var domain3 = 'hello@gaurav.luthra.qwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwertyqwerty.com';

        it('subdomain[3] is greater than 64 characters is not a valid email', function () {
            expect(isValidEmail(domain3)).to.be.false;
        });
    });
});
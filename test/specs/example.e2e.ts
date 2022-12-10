"strict mode"
import LoginPage from  '../pageobjects/login.page';
import SecurePage from '../pageobjects/secure.page';


describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        // Chapter 3
        // console.log (`Entering password`) // Intrinsic log
        // await global.log (`Entering password`) // Custom log
        // await global.log (``) // Does not print 
        // await global.log (null) // Does not print 
        // await global.log (Promise) // Adds trace back

        LoginPage.login('tomsmith1', 'SuperSecretPassword!');
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');

        // Chapter 4
        Promise.resolve().then( _ => console.log(`2`));
        setTimeout( _ => console.log(`3`),0);
        console.log(`1`);
    });
});





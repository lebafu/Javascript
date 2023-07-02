//const puppeteer = require('puppeteer');
//const fs =require('fs/promises');
/*
async function abrirPaginaFacebook(){
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 400,
        executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      });
    const page = await browser.newPage();
    await page.goto('https://facebook.com/');

  const inputEmail='input[name="email"]';
  await page.waitForSelector(inputEmail);

  // Escribir en el campo de entrada
  await page.type(inputEmail, '*****************');

  const inputPassword='input[name="pass"]';
  await page.waitForSelector(inputPassword);

  // Escribir en el campo de entrada
  await page.type(inputPassword, '**************');

  // Esperar a que el botón esté disponible en la página
  const buttonIniciarSesion = 'button[name="login"]';
  await page.waitForSelector(buttonIniciarSesion);

  // Dar clic al botón
  await page.click('a[href="/login"]');
  await page.click(buttonIniciarSesion);
  
  // Esperar un momento para que el texto se escriba completamente
  new Promise(r => setTimeout(r, 40000)); // Seleccionar el campo de entrada
    await browser.close();
  };

  abrirPaginaFacebook();*/

 /* const puppeteer = require('puppeteer');
  const fs =require('fs/promises');

async function loginToFacebook() {
  const browser = await puppeteer.launch({ 
    headless: false,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });
  const page = await browser.newPage();
  await page.goto('https://www.facebook.com/');

  // Esperar a que los campos de inicio de sesión estén disponibles en la página
  await page.waitForSelector('#email');
  await page.waitForSelector('#pass');

  // Completar los campos de inicio de sesión
  await page.type('#email', '************');
  await page.type('#pass', '************');

  // Hacer clic en el botón de inicio de sesión
  await page.click('button[name="login"]');

  //await page.click('[aria-label="Messenger"aria-label="Messenger"]');
  // Esperar a que aparezca el botón de chat
  await page.waitForNavigation();

  await page.waitForSelector('[aria-label="Messenger"]');
  await page.click('[aria-label="Messenger"]');
  // Hacer clic en el botón de chat
//await page.click('[aria-label="Messenger"]');
  await page.waitForNavigation({ timeout: 60000 }); // Aumentamos el tiempo de espera a 60 segundos (60000 ms)
  await page.click('input[aria-label="Buscar en Messenger"]');
  await page.type('input[aria-label="Buscar en Messenger"]', 'Pepito Perez');
  await page.keyboard.press('Enter');
  await page.waitForNavigation(); // Aumentamos el tiempo de espera a 60 segundos (60000 ms)
  // Esperar un momento para que se realice la acción después del inicio de sesión
  //new Promise(r => setTimeout(r, 40000)); // Seleccionar el campo de entrada
  await page.waitForNavigation({ timeout: 240000 }); // Aumentamos el tiempo de espera a 60 segundos (60000 ms)
  // Cerrar el navegador
  await browser.close();
}

loginToFacebook();*/


const puppeteer = require('puppeteer');

async function loginAndSendMessage(username, password, recipient, message) {
  const browser = await puppeteer.launch({ 
    headless: false,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });
  const page = await browser.newPage();
  await page.goto('https://www.facebook.com');

  // Iniciar sesión
  await page.waitForSelector('#email');
  await page.type('#email', username);
  await page.type('#pass', password);
  await page.click('button[name="login"]');
  await page.keyboard.press('Enter');
  await page.waitForNavigation();

  // Abrir ventana de chat
  await page.waitForSelector('[aria-label="Messenger"]');
  await page.click('[aria-label="Messenger"]');
  await page.waitForNavigation();

  // Escribir en el campo de búsqueda de Messenger
  await page.waitForSelector('input[aria-label="Buscar en Messenger"]');
  //await page.focus('input[aria-label="Buscar en Messenger"]');
  await page.type('input[aria-label="Buscar en Messenger"]', recipient);
  await page.waitForNavigation(2000); // Esperar a que aparezcan los resultados de búsqueda

  // Seleccionar el primer resultado de búsqueda
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('Enter');
  new Promise(r => setTimeout(r, 2000)); // Esperar a que se cargue el chat

  // Escribir el mensaje
  await page.type('div[aria-label="Nuevo mensaje"]', message);
  await page.keyboard.press('Enter');

  await browser.close();
}

const username = 'tu_nombre_de_usuario';
const password = 'tu_contraseña';
const recipient = 'Nombre de la persona a buscar';
const message = '¡Hola! Este es un mensaje enviado desde Puppeteer.';

loginAndSendMessage(username, password, recipient, message)
  .then(() => {
    console.log('Mensaje enviado correctamente.');
  })
  .catch((error) => {
    console.error('Ocurrió un error:', error);
  });

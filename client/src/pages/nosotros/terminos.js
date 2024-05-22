import styles from '../../styles/terminos.module.css';
import Layout from '@/components/layout';
import Link from 'next/link';
import EnConstruccion from '@/components/enConstruccion';
import Image from 'next/image';


export default function Terminos() {
  return (
    <>
      <Layout title="Nosotros">
        <div className={styles.container}>
            <div className={styles.section}>
                <h1>Términos y condiciones</h1>
                <p>Para poder operar en la plataforma todas las Personas Usuarias deberán aceptar los
                    Términos y Condiciones, los anexos y la Declaración de Privacidad.
                    Cada Persona Usuaria es responsable de los datos personales que brinda al momento
                    de registrarse y se obliga a mantenerlos actualizados. Además, es el único responsable
                    del uso y resguardo de su contraseña. 
                    En algunos casos, podremos cobrar una tarifa por el uso de los servicios que integran
                    el ecosistema de H2H, que la Persona Usuaria se compromete a pagar.</p>
            </div>
            <div className={styles.section}>
                <h1>Creación de perfil</h1>
                <p>1- Ingresas a la pestaña “mi perfil”</p>
                <p>2- Diligencias los datos solicitados 
                    Nombre,   apellido,   dirección   (dirección   debe   incluir   ciudad   y   municipio),   email,
                    contraseña.</p>
                <p>3- Envias tus datos. Con este envío entendemos que aceptas nuestras políticas de
                    tratamiento de datos.</p>   
            </div>
            <div className={styles.section}>
                <h1>Vender</h1>
                <p>1- Creas tu perfil en nuestra página, debes poner la dirección en la cual se hará la
                    recogida de tu producto </p>
                <p>2- En la pestaña vender, publicas el artículo que vas a ofrecer, llenando cada uno
                    de los campos.</p>
                <div>
                    <p>- Nombre: el nombre de tu dispositivo lo más claro y sencillo que puedas. Evita
                        términos restrictivos como oferta, gana, etc. </p>   
                    <p>- Referencia: referencia de fabrica del artículo que ofrecer</p>  
                    <p>- Descripción:   descripción   detallada   del   artículo   con   sus   características   mas
                        relevantes (memoria, estado de la batería, roturas, estado de la caja)</p>  
                    <p>- Modelo o año de adquisición: año en el que adquiriste el artículo, si aplica.</p>  
                    <p>- Categoría y subcategoría.</p>  
                    <p>- Estado del producto: nuevo, reacondicionado, usado.</p>  
                    <p>- Accesorios incluidos</p>  
                    <p>- ¿Qué es relevante que debe saber tu comprador? Es tu responsabilidad ser
                        lo mas preciso posible con el producto que ofreces. </p>  
                    <p>- Fotos del producto: adjuntar fotografías del producto por todos sus ángulos,
                        haciendo  especial  énfasis  en  los  detalles  que  desmejoran  la  calidad  de  tu
                        artículo, si aplica.</p>  
                    <p>Nota: con la publicación de este anuncio aceptas las políticas, condiciones y
                        términos de H2H.</p>  
                </div>
                <p>3- Una   vez   compren   el   artículo,   te   será   notificada   la   recogida   de   éste   en   tu
                    dirección. El articulo debe empacarse con mucho cuidado, preferiblemente en
                    cajas de cartón. Si en el transporte ocurre una avería por fallas en el empaque
                    deberás asumir la responsabilidad. </p>  
                <p>4- H2H cargará tu dinero en el balance de tu cuenta como saldo acreditado por la
                    venta. Este dinero quedara inmóvil hasta tanto el comprador no verifique, en un
                    termino   inferior   a   3   dias   calendario   de   la   recepción   del   producto,   que   está
                    conforme con lo que recibió.</p>  
                <p>5- Una vez el comprador verifique la funcionalidad del articulo recibido, o 2 dias
                    después   de   su   recepción   física;   tu   dinero   será   liberado   y   consignado   en   tu
                    cuenta bancaria en máximo 5 días hábiles.</p>  
            </div>
            <div className={styles.section}>
                <h1>Comprar</h1>
                <p>1- Ingresas a la plataforma y buscas el producto que necesitas</p>
                <p>2- Creas tu perfil y confirmas dirección de envíos.</p>
                <p>3- Compras tu producto: seleccionas y pagas el artículo con los medios de pago
                    habilitados para este fin.</p>
                <p>4- Recibes   tu   producto.   A   partir   de   este   momento   tienes   3   dias   calendario   para
                    revisar   la   funcionalidad   del   artículo.   Pasados   2   dias   entenderemos   que   estas
                    feliz con lo que recibiste y procederemos a desembolsar el dinero al vendedor.</p>
                <p>5- Disfrutas tu producto, ¡así de fácil!</p>
            </div>
            <div className={styles.section}>
                <h1>Costos de envío</h1>
                <p>Los costos de envíos deben ser asumidos por el comprador y dependerán de la
                    ciudad de origen y destino del artículo.</p>
                <p>Sin embargo, en caso de devolución del producto por una causa imputable al
                    vendedor, será este quien asumirá el costo del envío y devuelta del artículo. Tu
                    artículo   no   será   devuelto   hasta   tanto   no   canceles   los   costos   de   envíos   y
                    administración,   por   esto   debes   ser   muy   riguroso   y   claro   al   momento   de
                    publicación de tus artículos.</p>
            </div>
            <div className={styles.section}>
                <h1>Daños en transporte</h1>
                <p>Nuestros envíos son coordinados con transportadoras nacionales confiables; sin
                    embargo, si el articulo llegase a presentar averías por transporte no imputables a
                    la transportadora, analizaremos la situación y validaremos la responsabilidad del
                    vendedor por falta de diligencia en el empaque o manejo.</p>
            </div>
            <div className={styles.section}>
                <h1>Cargos administrativos y de comisión H2H</h1>
                <p>Tenemos un interés genuino en lograr que los bienes de segunda mano circulen
                    H2H.   En   las   transacciones   el   vendedor   deberá   asumir   unos   cargos   por
                    administración y comisión, así:</p>
                    <p>10% del valor neto del producto por comisión a H2H</p>
                    <p>4% costos de administración y servicio</p>
                    <p>3% costos bancarios</p>
            </div>
            <div className={styles.section}>
                <h1>Términos y Condiciones</h1>
                <p>Estos términos y condiciones y los anexos que explican los servicios de H2H (de ahora
                    en más: “Términos y Condiciones”) regulan la relación entre H2H y las personas que
                    usan sus servicios (“Personas Usuarias”).</p>
                    <p>Las Personas Usuarias aceptan estos Términos y Condiciones desde el momento en
                        que se registran en el Sitio y usan H2H.</p>
                    <p>Cuando debamos hacer cambios importantes en nuestros servicios, publicaremos las
                        modificaciones con 10 días corridos de anticipación para que las Personas Usuarias puedan revisarlas y seguir usando H2H. En ningún caso afectarán las operaciones que
                        ya hayan finalizado.</p>
                    <p>Las Personas Usuarias que no tengan obligaciones pendientes con H2H o con otras
                        Personas Usuarias, podrán finalizar la relación con H2H cancelando su cuenta.</p>
            </div>
            <div className={styles.section}>
                <h1>Capacidad</h1>
                <p>Podrán usar nuestros servicios las personas mayores de edad que tengan capacidad
                    legal para contratar.</p>
                <p>Quien   use   H2H   en   representación   de   una   empresa   deberá   tener   capacidad   para
                    contratar a nombre de ella. Además, para poder usar la cuenta, la Persona Usuaria
                    debe encontrarse activa.</p>
            </div>
            <div className={styles.section}>
                <h1>Registro y Cuenta</h1>
                <p>Quien quiera usar nuestros servicios, deberá completar el formulario de registro con los
                    datos   que   le   sean   requeridos.   Al   completarlo,   se   compromete   a   hacerlo   de   manera
                    exacta, precisa y verdadera y a mantener sus datos siempre actualizados. La Persona
                    Usuaria será la única responsable de la certeza de sus datos de registro. Sin perjuicio
                    de   la   información   brindada   en   el   formulario,   podremos   solicitar   y/o   consultar
                    información adicional para corroborar la identidad de la Persona Usuaria. 
                    La  cuenta  es  personal,  única  e  intransferible,  es  decir  que  bajo  ningún  concepto  se
                    podrá   vender   o   ceder   a   otra   persona.   Se   accede   a   ella   con   la   clave   personal   de
                    seguridad que haya elegido y que deberá mantener bajo estricta confidencialidad.</p>
                <p>Podremos rechazar una solicitud de registro o bien cancelar un registro ya aceptado,
                    sin que esto genere derecho a un resarcimiento. No podrán registrarse nuevamente en
                    el   Sitio   las   Personas   Usuarias   que   hayan   sido   inhabilitadas   previamente.   Tampoco
                    podrán registrarse quienes estén incluidos o relacionados a personas incluidas en listas
                    nacionales o internacionales de sanciones.</p>
                <p>Además,   en   caso   de   detectar   el   uso   de   más   de   una   cuenta,   podremos   aplicar
                    retenciones, débitos y/o cualquier otra medida si consideramos que ese accionar puede
                    perjudicar al resto de las personas que usan el Sitio o a H2H, más allá de las sanciones
                    que pudieran corresponder.</p>
            </div>
            <div className={styles.section}>
                <h1>Privacidad de datos</h1>
                <p>En   H2H   hacemos   un   uso   responsable   de   la   información   personal,   protegiendo   la
                    privacidad   de   las   Personas   Usuarias   que   nos   confiaron   sus   datos   y   tomando   las medidas necesarias para garantizar la seguridad en H2H. Consulta nuestra política de
                    tratamiento de datos aquí (link a política de tratamiento de datos).</p>
            </div>
            <div className={styles.section}>
                <h1>Sanciones</h1>
                <p>En caso de que la Persona Usuaria incumpliera una ley o los Términos y Condiciones,
                    podremos   advertir,   suspender,   restringir   o   inhabilitar   temporal   o   definitivamente   su
                    cuenta,   sin   perjuicio   de   otras   sanciones   que   se   establezcan   en   las   reglas   de   uso
                    particulares de los servicios de H2H.</p>
            </div>
            <div className={styles.section}>
                <h1>Tarifas</h1>
                <p>H2H podrá cobrar por sus servicios y la Persona Usuaria se compromete a pagarlos a
                    tiempo.</p>
                <p>Podremos modificar o eliminar las tarifas en cualquier momento con el debido preaviso
                    establecido en los Términos y Condiciones. De la misma manera, podremos modificar
                    las tarifas temporalmente por promociones en favor de las Personas Usuarias.</p>
                <p>La   Persona   Usuaria   autoriza   a   H2H   a   retener   y/o   debitar   los   fondos   existentes   y/o
                    futuros de su cuenta de H2H y/o de las cuentas bancarias que haya registrado en ella,
                    para saldar las tarifas impagas o cualquier otra deuda que pudiera tener.</p>
                <p>Para conocer el detalle de las tarifas de cada servicio, las Personas Usuarias deberán
                    consultar los términos y condiciones correspondientes.</p>
                <p>En todos los casos se emitirá la factura de conformidad con los datos fiscales que las
                    personas tengan cargados en su cuenta. </p>
            </div>
            <div className={styles.section}>
                <h1>Propiedad Intelectual</h1>
                <p>H2H   y/o   sus   sociedades   relacionadas   son   propietarias   de   todos   los   derechos   de
                    propiedad intelectual sobre sus sitios, todo su contenido, servicios, productos, marcas,
                    nombres   comerciales,   logos,   diseños,   imágenes,   frases   publicitarias,   derechos   de
                    autor, dominios, programas de computación, códigos, desarrollos, software, bases de
                    datos,   información,   tecnología,   patentes   y   modelos   de   utilidad,   diseños   y   modelos
                    industriales, secretos comerciales, entre otros (“Propiedad Intelectual”) y se encuentran
                    protegidos por leyes nacionales e internacionales.</p>
                <p>Aunque H2H otorga permiso para usar sus productos y servicios conforme a lo previsto
                    en   los   Términos   y   Condiciones,   esto   no   implica   una   autorización   para   usar   su
                    Propiedad   Intelectual,   excepto   consentimiento   previo   y   expreso   de   H2H   y/o   sus
                    sociedades vinculadas. En cualquier caso, los usuarios vendedores que usen dichos productos y servicios no podrán utilizar la Propiedad Intelectual de H2H de una manera
                    que cause confusión en el público y deberán llevar a cabo su actividad comercial bajo
                    una marca o nombre comercial propio y distintivo, que no resulte confundible con la
                    marca H2H.</p>     
                <p>Está prohibido usar nuestros productos o servicios para fines ilegales, realizar cualquier
                    tipo de ingeniería inversa u obras derivadas, utilizar herramientas de búsqueda o de
                    extracción de datos y contenidos de nuestra plataforma para su reutilización y/o crear
                    bases de datos propias que incluyan en todo o en parte nuestro contenido sin nuestra
                    expresa   autorización.   Está   también   prohibido   el   uso   indebido,   sin   autorización   y/o
                    contrario a la normativa vigente y/o que genere confusión o implique uso denigratorio
                    y/o que le cause perjuicio, daños o pérdidas a H2H y/o a sus sociedades relacionadas.
                    La utilización de los productos y servicios de H2H tampoco implica la autorización para
                    usar propiedad intelectual de terceros que pueda estar involucrada, cuyo uso quedará
                    bajo exclusiva responsabilidad del usuario.</p>     
                <p>En   caso   de   que   una   Persona   Usuaria   o   cualquier   publicación   infrinja   la   Propiedad
                    Intelectual   de   H2H   o   de   terceros,   H2H   podrá   remover   dicha   publicación   total   o
                    parcialmente,   sancionar   al   usuario   conforme   a   lo   previsto   en   estos   Términos   y
                    Condiciones y ejercer las acciones extrajudiciales y/o judiciales correspondientes.</p>     
            </div>
            <div className={styles.section}>
                <h1>Indemnidad</h1>
                <p>La   Persona   Usuaria   mantendrá   indemne   a   H2H   y   sus   sociedades   relacionadas,   así
                    como a quienes la dirigen, suceden, administran, representan y/o trabajan en ellas, por
                    cualquier   reclamo   administrativo   o   judicial   iniciado   por   otras   Personas   Usuarias,
                    terceros   o   por   cualquier   Organismo,   relacionado   con   sus   actividades   en   el   H2H.
                    En virtud de esa responsabilidad, podrán realizar compensaciones, retenciones u otras
                    medidas necesarias para la reparación de pérdidas, daños y perjuicios, cualquiera sea
                    su naturaleza.</p>
            </div>
            <div className={styles.section}>
                <h1>Jurisdicción y Ley Aplicable</h1>
                <p>Estos Términos y Condiciones se rigen por la ley local. Toda controversia derivada de
                    su   aplicación,   interpretación,   ejecución   o   validez   será   resuelta   por   los   tribunales
                    nacionales   ordinarios   competentes,   con   asiento   en   la   capital,   salvo   disposición
                    específica   de   normas   de   orden   público,   como,   por   ejemplo,   legislación   relativa   al
                    Consumidor. Para todos los efectos relacionados con estos Términos y Condiciones y
                    con el uso del sitio, H2H Colombia SAS, establece como domicilio Cr 36D Sur N 27D
                    27, Envigado, Colombia.</p>
            </div>
        </div>
      </Layout>

    </>
  )
}
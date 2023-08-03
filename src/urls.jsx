//EVENTS
export const GET_EVENTS = "https://api.lesbotoc.com/events/read.php"; 
export const SHOW_EVENT = (id) => `https://api.lesbotoc.com/events/single_read.php/${id}`;
export const POST_EVENT = "https://api.lesbotoc.com/events/create.php";
export const DELETE_EVENT = (id) => `https://api.lesbotoc.com/events/delete.php/${id}`;

//CONTACTS
export const GET_CONTACTS = "https://api.lesbotoc.com/contacts/read.php";
export const SHOW_CONTACT = (id) => `https://api.lesbotoc.com/contacts/single_read.php/${id}`;
export const ADD_CONTACT = "https://api.lesbotoc.com/contacts/create.php";
export const DELETE_CONTACT = (id) => `https://api.lesbotoc.com/contacts/delete.php/${id}`;

//IMAGES
export const GET_IMAGES = "https://api.lesbotoc.com/images/read.php";
export const SHOW_IMAGE = (id) => `https://api.lesbotoc.com/images/single_pic.php/${id}`;
export const UPLOAD_IMG = "https://api.lesbotoc.com/images/upload.php";
export const DELETE_IMAGE = (id) => `https://api.lesbotoc.com/images/delete.php/${id}`;

//SPEEDDATING
export const GET_SPEEDDATERS = "https://api.lesbotoc.com/speeddating/read.php";
export const ADD_SPEEDDATER = "https://api.lesbotoc.com/speeddating/create.php"
export const DELETE_SPEEDDATER = (id) => `https://api.lesbotoc.com/speeddating/delete.php/${id}`;
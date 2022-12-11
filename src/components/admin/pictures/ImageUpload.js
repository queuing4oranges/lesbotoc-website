import axios from 'axios';
import React from 'react'

export default function ImageUpload() {

    

    function uploadImage(e) {
        e.preventDefault();

        const form = document.getElementById('form')
        const formData = new FormData(form);

        console.log([...formData])
        
        axios.post('https://api.itisgoodtohave.me/images/upload.php', formData)
        .then(res => console.log(res))
        .catch(err=> {
            console.log("sth went terribly wrong!")
            console.log(err)
        })

    }



  return (
    <div>
        <h3>Upload Images</h3>
        <form onSubmit={uploadImage} id="form" >

            <input type="file" name="image" id="image" />

            <input type="submit" name="insert" id="insert" value="Insert" />

        </form>

    </div>
  )
}















//this will work: 

/*
export default function ImageUpload() {

    

    function uploadImage(e) {
        e.preventDefault();

        const form = document.getElementById('form')
        const formData = new FormData(form);

        console.log([...formData])
        axios.post('https://api.itisgoodtohave.me/images/upload.php', formData).then(res => console.log(res))

    }



  return (
    <div>
        <h3>Upload Images</h3>
        <form onSubmit={uploadImage} id="form" >

            <input type="file" name="image" id="image" />

            <button type="submit">Upload</button>

        </form>

    </div>
  )
}

*/
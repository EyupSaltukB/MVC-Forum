import React from 'react'

const AddPostView = ({ onInputChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <h2>Yeni Gönderi Ekle +</h2>
            <fieldset>
                <label>Kullanıcı Adı</label>
                <input type="text" placeholder='Kullanıcı Adı: örn. Mehmet' onChange={(e) => onInputChange("user", e)} />
            </fieldset>

            <fieldset>
                <label>Başlık</label>
                <input type="text" placeholder='Başlık: örn. MVC Nedir?' onChange={(e) => onInputChange("title", e)} />
            </fieldset>

            <fieldset>
                <label>Açıklama</label>
                <textarea placeholder='Açıklamayı giriniz...' onChange={(e) => onInputChange("text", e)} />
            </fieldset>

            <button>Gönder</button>
        </form>

    )
}

export default AddPostView
import React, {MouseEvent} from 'react';

export const User = ()=> {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>)=> {

        alert('user have been deleted')
        alert(e.currentTarget.name)
    }
    const saveUser = ()=> {
        alert('user should be save')
    }
    const onNameChange= ()=> {
        alert('name change')
    }
    const focusLostHandler= ()=> {
        alert('focus lost')
    }

    return (
        <div><textarea
            onChange={onNameChange}
            onBlur={focusLostHandler}
        >Dimych</textarea>
        <button name={'delete'} onClick={deleteUser}>delete</button>
        <button name={'save'} onClick={saveUser}>save</button>
        </div>

    )
}
import './Notification.css'
import { useState, createContext, useContext } from 'react'

const Notification = ({ message, type, otherClass = 'Message' }) => {

    const notificationStyles = {
        
        position: 'absolute',
        top: 100,
        right: 5,
        width: 'auto',
        height:'auto',
        padding: '10px 20px 10px 20px'
    }

    if (message === '') {
        return null
    }

    const config = true ?

    {
        style: notificationStyles,
        className: `${type ==='success' ? 'Success' : 'Error'} ${otherClass || '' }`
    } : {}

    return (

        <div {...config} >
            {message}
        </div>
    )

}


const NotificationContext = createContext ()

export const NotificationProvider = ({children}) => {

    const [message, setMessage] = useState ('')
    const [ type, setType] = useState ('success')
    
    const setNotification = (typ,msg) => {
        setMessage (msg)
        setType (typ)
        setTimeout (() => {
            setMessage('')
        }, 2000)
    }

    return (
        <NotificationContext.Provider value={{setNotification}}>

            <Notification message={message} type={type}/> 
            {children}
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext (NotificationContext)
}



import { RiEmotionHappyLine, RiEmotionUnhappyLine } from 'react-icons/ri';
import { BsEmojiNeutral } from 'react-icons/bs';
import style from '@/styles/misPublicaciones.module.css';
export default function calificaciones() {
    return (
        <div className={style.containerCal}>
            <div className={style.containerEmoji}>
                <RiEmotionHappyLine className={style.emoji}/>
                <BsEmojiNeutral className={style.emoji}/>
                <RiEmotionUnhappyLine className={style.emoji}/>
            </div>
            <textarea className={style.textarea} placeholder="Escribe tu comentario..."></textarea>
            
        </div>
    )
}

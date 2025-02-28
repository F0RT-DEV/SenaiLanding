import React from 'react'
import styles from './css/Footer.module.css'
const Footer = () => {
  return (
    <div className={styles.containerfooter}>
        <div className={styles.logoFooter}><svg width="206" height="34" viewBox="0 0 206 34" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M139.9 0.799997C140 0.799997 140.1 0.899997 140 0.999997L139.9 1.4C139.9 1.5 139.8 1.6 139.7 1.6C139.2 1.6 138.5 1.5 137.9 1.5C137.1 1.5 136.2 1.6 136.2 2.5C136.2 3 136.4 3.2 137.1 3.7L137.9 4.3C138.9 4.9 139.2 5.5 139.2 6.2C139.2 7.6 138 8.4 136.3 8.4C135.7 8.4 135 8.3 134.6 8.3C134.5 8.3 134.4 8.2 134.4 8.1L134.5 7.7C134.5 7.6 134.6 7.5 134.7 7.5C135.2 7.5 135.9 7.6 136.4 7.6C137.5 7.6 138.2 7.2 138.2 6.2C138.2 5.7 137.9 5.5 137.2 5L136.3 4.4C135.6 3.9 135.2 3.3 135.2 2.6C135.2 1.2 136.4 0.699997 137.8 0.699997C138.5 0.699997 139.5 0.799997 139.9 0.799997Z" fill="white"/>
        <path d="M144.8 5.2L144.7 5.6C144.7 5.7 144.6 5.8 144.5 5.8H141V5.9C141 6.1 140.9 6.3 140.9 6.5C140.9 7.3 141.4 7.6 142.2 7.6C142.8 7.6 143.5 7.5 144 7.5C144.2 7.5 144.2 7.5 144.2 7.6L144.1 7.9C144.1 8 144 8.1 143.9 8.1C143.3 8.2 142.8 8.3 142.1 8.3C141.1 8.3 140.1 7.8 140.1 6.4C140.1 6.2 140.1 6 140.2 5.8L140.3 5.1C140.6 3.5 141.6 2.6 143 2.6C144.3 2.6 144.9 3.4 144.9 4.5C144.8 4.8 144.8 5 144.8 5.2ZM142.8 3.5C141.9 3.5 141.3 4.2 141.1 5.1V5.2H143.8V5.1C143.8 4.9 143.9 4.7 143.9 4.5C143.9 3.8 143.5 3.5 142.8 3.5Z" fill="white"/>
        <path d="M146.1 8.2C146.1 8.3 146 8.4 145.9 8.4H145.4C145.3 8.4 145.2 8.3 145.2 8.2L146.1 3C146.1 2.9 146.2 2.8 146.3 2.8H146.8C146.9 2.8 147 2.9 147 3V3.2C147.6 2.8 148 2.7 148.5 2.7C148.7 2.7 148.7 2.8 148.7 2.9L148.6 3.3C148.6 3.4 148.5 3.5 148.4 3.5C147.8 3.5 147.4 3.6 146.9 3.9L146.1 8.2Z" fill="white"/>
        <path d="M153.7 3L151.6 7.7C151.3 8.3 150.9 8.5 150.5 8.5C150.1 8.5 149.7 8.3 149.6 7.7L149 3C149 2.8 149.1 2.8 149.2 2.8H149.7C149.8 2.8 149.9 2.9 149.9 3L150.3 7.4C150.3 7.7 150.4 7.7 150.5 7.7C150.6 7.7 150.7 7.6 150.8 7.4L152.7 3C152.8 2.9 152.8 2.8 153 2.8H153.6C153.7 2.8 153.7 2.9 153.7 2.9V3Z" fill="white"/>
        <path d="M155.3 2.8C155.4 2.8 155.5 2.8 155.5 3L154.6 8.2C154.6 8.3 154.5 8.4 154.4 8.4H153.9C153.8 8.4 153.7 8.3 153.7 8.2L154.6 3C154.6 2.8 154.7 2.8 154.8 2.8H155.3ZM155.7 0.599998C155.8 0.599998 155.9 0.699998 155.9 0.799998L155.8 1.6C155.8 1.7 155.7 1.8 155.6 1.8H155C154.8 1.8 154.8 1.7 154.8 1.6L154.9 0.799998C154.9 0.699998 155 0.599998 155.1 0.599998H155.7Z" fill="white"/>
        <path d="M160.2 3L160.1 3.4C160.1 3.5 160 3.6 159.9 3.6C159.5 3.5 159.2 3.5 158.6 3.5C157.8 3.5 157.2 4.1 157 5.2L156.9 6C156.9 6.2 156.8 6.4 156.8 6.6C156.8 7.4 157.2 7.7 157.8 7.7C158.3 7.7 158.6 7.7 159.1 7.6C159.2 7.6 159.3 7.6 159.3 7.7L159.2 8.1C159.2 8.2 159.1 8.3 159 8.3C158.7 8.4 158.2 8.4 157.7 8.4C156.5 8.4 155.9 7.6 155.9 6.5C155.9 6.3 155.9 6.1 156 5.9L156.1 5.1C156.4 3.4 157.3 2.6 158.7 2.6C159.2 2.6 159.6 2.7 160 2.7C160.2 2.8 160.2 2.9 160.2 3ZM158.3 8.9L156.9 10.2C156.8 10.3 156.8 10.4 156.6 10.4H156C155.9 10.4 155.9 10.4 155.9 10.3C155.9 10.3 155.9 10.2 156 10.2L157.2 8.9C157.3 8.8 157.4 8.7 157.5 8.7H158.2C158.3 8.7 158.3 8.7 158.3 8.9C158.3 8.8 158.3 8.8 158.3 8.9Z" fill="white"/>
        <path d="M164.7 5.2L164.6 6C164.3 7.6 163.5 8.5 161.9 8.5C160.7 8.5 160 7.7 160 6.6C160 6.4 160 6.2 160.1 6L160.2 5.2C160.5 3.5 161.4 2.7 162.9 2.7C164.2 2.7 164.8 3.5 164.8 4.6C164.8 4.8 164.8 5 164.7 5.2ZM162.8 3.5C161.9 3.5 161.3 4.2 161.1 5.2L160.9 6C160.9 6.2 160.8 6.4 160.8 6.6C160.8 7.3 161.1 7.7 161.9 7.7C162.8 7.7 163.4 7 163.6 6L163.7 5.2C163.7 5 163.8 4.8 163.8 4.6C163.9 3.9 163.6 3.5 162.8 3.5Z" fill="white"/>
        <path d="M173.5 0.999999C173.5 0.899999 173.6 0.799999 173.7 0.799999H174.2C174.3 0.799999 174.4 0.899999 174.4 0.999999L173.1 8.1C173.1 8.3 173 8.4 172.8 8.4H172.2C172 8.4 171.9 8.3 171.9 8.2L169.7 2.2L168.6 8.2C168.6 8.3 168.5 8.4 168.4 8.4H167.8C167.7 8.4 167.7 8.4 167.7 8.3L169 1.1C169 0.899999 169.1 0.799999 169.3 0.799999H169.8C170.1 0.799999 170.1 0.899999 170.2 0.999999L172.3 6.9L173.5 0.999999Z" fill="white"/>
        <path d="M179.1 2.9C179.3 2.9 179.3 3 179.3 3.1L178.4 8.1C178.4 8.2 178.3 8.3 178.2 8.3H177.8C177.6 8.3 177.6 8.2 177.6 8.1L177.7 7.8C177.1 8.2 176.7 8.4 176.1 8.4C175.2 8.4 174.5 7.8 174.5 6.6C174.5 6.4 174.5 6.2 174.6 6L174.8 5C175.1 3.2 176.2 2.7 177.5 2.7C177.9 2.7 178.6 2.8 179.1 2.9ZM177.3 3.4C176.2 3.4 175.7 4 175.5 5.1L175.3 6.2C175.3 6.4 175.3 6.5 175.3 6.7C175.3 7.5 175.7 7.8 176.2 7.8C176.7 7.8 177.1 7.6 177.7 7.2L178.3 3.6C178 3.5 177.7 3.4 177.3 3.4Z" fill="white"/>
        <path d="M180.7 5.2L180.6 6C180.6 6.2 180.5 6.4 180.5 6.6C180.5 7.4 180.9 7.7 181.5 7.7C182 7.7 182.3 7.7 182.8 7.6C183 7.6 183 7.6 183 7.8V8.1C183 8.2 182.9 8.3 182.8 8.3C182.5 8.4 182 8.4 181.5 8.4C180.3 8.4 179.7 7.6 179.7 6.5C179.7 6.3 179.7 6.1 179.8 5.9L179.9 5.1C180.2 3.4 181.1 2.6 182.5 2.6C183 2.6 183.4 2.7 183.8 2.7C184 2.7 184 2.8 184 2.9L183.9 3.3C183.9 3.4 183.8 3.5 183.7 3.5C183.3 3.4 183 3.4 182.4 3.4C181.5 3.5 180.9 4.1 180.7 5.2Z" fill="white"/>
        <path d="M185.6 2.8C185.7 2.8 185.8 2.8 185.8 3L184.9 8.2C184.9 8.3 184.8 8.4 184.7 8.4H184.2C184.1 8.4 184 8.3 184 8.2L184.9 3C184.9 2.8 185 2.8 185.1 2.8H185.6ZM186 0.599998C186.1 0.599998 186.2 0.699998 186.2 0.799998L186.1 1.6C186.1 1.7 186 1.8 185.9 1.8H185.4C185.2 1.8 185.2 1.7 185.2 1.6L185.3 0.799998C185.3 0.699998 185.4 0.599998 185.5 0.599998H186Z" fill="white"/>
        <path d="M191 5.2L190.9 6C190.6 7.6 189.8 8.5 188.2 8.5C187 8.5 186.3 7.7 186.3 6.6C186.3 6.4 186.3 6.2 186.4 6L186.5 5.2C186.8 3.5 187.7 2.7 189.2 2.7C190.5 2.7 191.1 3.5 191.1 4.6C191.1 4.8 191.1 5 191 5.2ZM189.1 3.5C188.2 3.5 187.6 4.2 187.4 5.2L187.2 6C187.2 6.2 187.1 6.4 187.1 6.6C187.1 7.3 187.4 7.7 188.2 7.7C189.1 7.7 189.7 7 189.9 6L190 5.2C190 5 190.1 4.8 190.1 4.6C190.2 3.9 189.9 3.5 189.1 3.5Z" fill="white"/>
        <path d="M196.4 4.8L195.8 8.2C195.8 8.3 195.7 8.4 195.6 8.4H195C194.9 8.4 194.8 8.3 194.8 8.2L195.4 4.8C195.4 4.6 195.5 4.4 195.5 4.2C195.5 3.7 195.3 3.4 194.5 3.4C194.1 3.4 193.7 3.5 193.1 3.8L192.3 8.1C192.3 8.2 192.2 8.3 192.1 8.3H191.6C191.5 8.3 191.4 8.2 191.4 8.1L192.3 2.9C192.3 2.8 192.4 2.7 192.6 2.7H193C193.2 2.7 193.2 2.8 193.2 2.9V3.1C193.7 2.8 194.2 2.6 194.8 2.6C195.9 2.6 196.3 3.3 196.3 4.2C196.4 4.4 196.4 4.6 196.4 4.8Z" fill="white"/>
        <path d="M201.6 2.9C201.8 2.9 201.8 3 201.8 3.1L200.9 8.1C200.9 8.2 200.8 8.3 200.7 8.3H200.3C200.1 8.3 200.1 8.2 200.1 8.1L200.2 7.8C199.6 8.2 199.2 8.4 198.6 8.4C197.7 8.4 197 7.8 197 6.6C197 6.4 197 6.2 197.1 6L197.3 5C197.6 3.2 198.7 2.7 200 2.7C200.4 2.7 201.1 2.8 201.6 2.9ZM199.8 3.4C198.7 3.4 198.2 4 198 5.1L197.8 6.2C197.8 6.4 197.8 6.5 197.8 6.7C197.8 7.5 198.2 7.8 198.7 7.8C199.2 7.8 199.6 7.6 200.2 7.2L200.8 3.6C200.5 3.5 200.2 3.4 199.8 3.4Z" fill="white"/>
        <path d="M204.2 0.699997C204.3 0.699997 204.4 0.799997 204.3 0.899997L203 8.2C203 8.3 202.9 8.4 202.8 8.4H202.3C202.2 8.4 202.1 8.3 202.2 8.2L203.5 0.899997C203.5 0.799997 203.6 0.699997 203.7 0.699997H204.2Z" fill="white"/>
        <path d="M137.2 13H137.7C137.8 13 137.9 13.1 137.8 13.2L136.5 20.4C136.5 20.5 136.4 20.6 136.2 20.6C135.5 20.7 134.9 20.8 134.3 20.8C133 20.8 132.4 20 132.4 18.9C132.4 18.7 132.4 18.5 132.5 18.3L132.6 17.6C132.9 15.8 133.8 15.1 135.3 15.1C135.6 15.1 136.1 15.1 136.5 15.2L136.8 13.3C137 13 137.1 13 137.2 13ZM135.3 15.8C134.3 15.8 133.8 16.5 133.7 17.5L133.6 18.2C133.6 18.4 133.5 18.7 133.5 18.9C133.5 19.6 133.8 20 134.6 20C134.9 20 135.5 20 135.8 19.9L136.5 15.8C136.2 15.8 135.7 15.8 135.3 15.8Z" fill="white"/>
        <path d="M142.6 17.5L142.5 17.9C142.5 18 142.4 18.1 142.3 18.1H138.8V18.2C138.8 18.4 138.7 18.6 138.7 18.8C138.7 19.6 139.2 19.9 140 19.9C140.6 19.9 141.3 19.8 141.8 19.8C142 19.8 142 19.8 142 19.9L141.9 20.2C141.9 20.3 141.8 20.4 141.7 20.4C141.1 20.5 140.6 20.6 139.9 20.6C138.9 20.6 137.9 20.1 137.9 18.7C137.9 18.5 137.9 18.3 138 18.1L138.1 17.4C138.4 15.8 139.4 14.9 140.8 14.9C142.1 14.9 142.7 15.7 142.7 16.8C142.7 17.1 142.7 17.3 142.6 17.5ZM140.7 15.8C139.8 15.8 139.2 16.5 139 17.4V17.5H141.7V17.4C141.7 17.2 141.8 17 141.8 16.8C141.8 16.1 141.4 15.8 140.7 15.8Z" fill="white"/>
        <path d="M150.9 20.7H150.3C150.2 20.7 150.2 20.6 150.2 20.5L149.9 18.1H147.2L146.1 20.5C146.1 20.6 146 20.7 145.9 20.7H145.3C145.2 20.7 145.2 20.6 145.2 20.6V20.5L148.3 13.8C148.6 13.2 149 13 149.5 13C149.9 13 150.3 13.1 150.4 13.8L151.1 20.5C151.1 20.6 151 20.7 150.9 20.7ZM149.5 14C149.5 13.9 149.4 13.8 149.3 13.8C149.2 13.8 149.1 13.9 149.1 14L147.6 17.4H149.9L149.5 14Z" fill="white"/>
        <path d="M156.6 17.5L156.5 18.2C156.2 19.9 155.4 20.7 153.8 20.7C153.5 20.7 153 20.7 152.6 20.6L152.3 22.5C152.3 22.6 152.2 22.7 152.1 22.7H151.6C151.5 22.7 151.5 22.6 151.5 22.5L152.7 15.5C152.7 15.4 152.8 15.3 153 15.3C153.6 15.2 154.3 15.1 154.9 15.1C156.2 15.1 156.8 15.9 156.8 17C156.7 17.1 156.7 17.3 156.6 17.5ZM154.7 15.7C154.3 15.7 153.8 15.8 153.5 15.8L152.8 19.9C153.1 20 153.7 20 154 20C154.9 20 155.4 19.3 155.6 18.2L155.7 17.5C155.8 17.2 155.8 17 155.8 16.8C155.8 16.1 155.5 15.7 154.7 15.7Z" fill="white"/>
        <path d="M158 20.5C158 20.6 157.9 20.7 157.8 20.7H157.3C157.2 20.7 157.1 20.6 157.1 20.5L158 15.3C158 15.2 158.1 15.1 158.2 15.1H158.7C158.8 15.1 158.9 15.2 158.9 15.3V15.5C159.5 15.1 159.9 15 160.4 15C160.6 15 160.6 15.1 160.6 15.2L160.5 15.6C160.5 15.7 160.4 15.8 160.3 15.8C159.7 15.8 159.3 15.9 158.8 16.2L158 20.5Z" fill="white"/>
        <path d="M164.9 17.5L164.8 17.9C164.8 18 164.7 18.1 164.6 18.1H161.1V18.2C161.1 18.4 161 18.6 161 18.8C161 19.6 161.5 19.9 162.3 19.9C162.9 19.9 163.6 19.8 164.1 19.8C164.3 19.8 164.3 19.8 164.3 19.9L164.2 20.2C164.2 20.3 164.1 20.4 164 20.4C163.4 20.5 162.9 20.6 162.2 20.6C161.2 20.6 160.2 20.1 160.2 18.7C160.2 18.5 160.2 18.3 160.3 18.1L160.4 17.4C160.7 15.8 161.7 14.9 163.1 14.9C164.4 14.9 165 15.7 165 16.8C165 17.1 165 17.3 164.9 17.5ZM163 15.8C162.1 15.8 161.5 16.5 161.3 17.4V17.5H164V17.4C164 17.2 164.1 17 164.1 16.8C164.1 16.1 163.7 15.8 163 15.8Z" fill="white"/>
        <path d="M170.3 17.1L169.7 20.5C169.7 20.6 169.6 20.7 169.5 20.7H169C168.9 20.7 168.8 20.6 168.8 20.5L169.4 17.1C169.4 16.9 169.5 16.7 169.5 16.5C169.5 16 169.3 15.7 168.5 15.7C168.1 15.7 167.7 15.8 167.1 16.1L166.3 20.4C166.3 20.5 166.2 20.6 166.1 20.6H165.6C165.5 20.6 165.4 20.5 165.4 20.4L166.3 15.2C166.3 15.1 166.4 15 166.6 15H167C167.2 15 167.2 15.1 167.2 15.2V15.4C167.7 15.1 168.2 14.9 168.8 14.9C169.9 14.9 170.3 15.6 170.3 16.5C170.3 16.7 170.3 16.9 170.3 17.1Z" fill="white"/>
        <path d="M175.6 13H176.1C176.2 13 176.3 13.1 176.2 13.2L174.9 20.4C174.9 20.5 174.8 20.6 174.6 20.6C173.9 20.7 173.3 20.8 172.7 20.8C171.4 20.8 170.8 20 170.8 18.9C170.8 18.7 170.8 18.5 170.9 18.3L171 17.6C171.3 15.8 172.2 15.1 173.7 15.1C174 15.1 174.5 15.1 174.9 15.2L175.2 13.3C175.4 13 175.4 13 175.6 13ZM173.7 15.8C172.7 15.8 172.2 16.5 172.1 17.5L172 18.2C172 18.4 171.9 18.7 171.9 18.9C171.9 19.6 172.2 20 173 20C173.3 20 173.9 20 174.2 19.9L174.9 15.8C174.5 15.8 174 15.8 173.7 15.8Z" fill="white"/>
        <path d="M177.8 15C177.9 15 178 15 178 15.2L177.1 20.4C177.1 20.5 177 20.6 176.9 20.6H176.4C176.3 20.6 176.2 20.5 176.2 20.4L177.1 15.2C177.1 15 177.2 15 177.3 15H177.8ZM178.2 12.9C178.3 12.9 178.4 13 178.4 13.1L178.3 13.9C178.3 14 178.2 14.1 178.1 14.1H177.6C177.4 14.1 177.4 14 177.4 13.9L177.5 13.1C177.5 13 177.6 12.9 177.7 12.9H178.2Z" fill="white"/>
        <path d="M182.4 16.4L179.2 19.7C179.1 19.8 179.1 19.8 179.1 19.8C179.1 19.8 179.1 19.9 179.2 19.9H181.8C182 19.9 182 20 182 20.1L181.9 20.4C181.9 20.6 181.8 20.6 181.7 20.6H179.1C178.5 20.6 178.2 20.3 178.2 19.9C178.2 19.7 178.3 19.5 178.4 19.3L181.7 15.9C181.8 15.8 181.8 15.8 181.8 15.8C181.8 15.8 181.8 15.7 181.7 15.7H179.2C179.1 15.7 179 15.6 179 15.5L179.1 15.2C179.1 15 179.2 15 179.3 15H181.9C182.5 15 182.7 15.3 182.7 15.7C182.6 16 182.6 16.2 182.4 16.4Z" fill="white"/>
        <path d="M187.6 15.2C187.8 15.2 187.8 15.3 187.8 15.4L186.9 20.4C186.9 20.5 186.8 20.6 186.7 20.6H186.3C186.1 20.6 186.1 20.5 186.1 20.4L186.2 20.1C185.6 20.5 185.2 20.7 184.6 20.7C183.7 20.7 183 20.1 183 18.9C183 18.7 183 18.5 183.1 18.3L183.3 17.3C183.6 15.5 184.7 15 186 15C186.4 15 187 15.1 187.6 15.2ZM185.8 15.7C184.7 15.7 184.2 16.3 184 17.4L183.8 18.5C183.8 18.7 183.8 18.8 183.8 19C183.8 19.8 184.2 20.1 184.7 20.1C185.2 20.1 185.6 19.9 186.2 19.5L186.8 15.9C186.5 15.8 186.2 15.7 185.8 15.7Z" fill="white"/>
        <path d="M188.3 17.5C188.6 15.7 189.5 15 191 15C191.6 15 192.3 15.1 192.8 15.2C193 15.2 193 15.3 193 15.4L192.1 20.6C191.8 22.2 191.1 22.6 189.7 22.6C188.9 22.6 188.3 22.5 188 22.4C187.8 22.4 187.8 22.3 187.8 22.2L187.9 21.9C187.9 21.8 188 21.7 188.1 21.7C188.4 21.7 189.3 21.8 189.8 21.8C190.7 21.8 191 21.5 191.2 20.6V20.5C190.9 20.6 190.3 20.6 190 20.6C188.9 20.6 188.1 20.1 188.1 18.8C188.1 18.6 188.1 18.4 188.2 18.1L188.3 17.5ZM190.9 15.7C189.9 15.7 189.4 16.3 189.2 17.5L189.1 18.2C189 18.5 189 18.7 189 18.9C189 19.7 189.4 19.9 190.1 19.9C190.4 19.9 190.9 19.9 191.3 19.8L192 15.8C191.7 15.8 191.3 15.7 190.9 15.7Z" fill="white"/>
        <path d="M198.1 17.5L198 17.9C198 18 197.9 18.1 197.8 18.1H194.3V18.2C194.3 18.4 194.2 18.6 194.2 18.8C194.2 19.6 194.7 19.9 195.5 19.9C196.1 19.9 196.8 19.8 197.3 19.8C197.5 19.8 197.5 19.8 197.5 19.9L197.4 20.2C197.4 20.3 197.3 20.4 197.2 20.4C196.6 20.5 196.1 20.6 195.4 20.6C194.4 20.6 193.4 20.1 193.4 18.7C193.4 18.5 193.4 18.3 193.5 18.1L193.6 17.4C193.9 15.8 194.9 14.9 196.3 14.9C197.6 14.9 198.2 15.7 198.2 16.8C198.2 17.1 198.2 17.3 198.1 17.5ZM196.2 15.8C195.3 15.8 194.7 16.5 194.5 17.4V17.5H197.2V17.4C197.2 17.2 197.3 17 197.3 16.8C197.3 16.1 196.9 15.8 196.2 15.8Z" fill="white"/>
        <path d="M205.9 16.9L205.3 20.5C205.3 20.6 205.2 20.7 205.1 20.7H204.6C204.5 20.7 204.4 20.6 204.4 20.5L205 16.9C205 16.7 205 16.6 205 16.5C205 16 204.7 15.8 204.2 15.8C203.9 15.8 203.4 15.9 202.9 16.1C202.9 16.3 202.9 16.7 202.9 16.9L202.3 20.5C202.3 20.6 202.2 20.7 202.1 20.7H201.6C201.5 20.7 201.4 20.6 201.5 20.5L202.1 16.9C202.1 16.7 202.2 16.5 202.2 16.3C202.2 15.9 201.9 15.7 201.6 15.7C201.1 15.7 200.5 16 200.2 16.1L199.4 20.4C199.4 20.5 199.3 20.6 199.2 20.6H198.7C198.6 20.6 198.5 20.5 198.6 20.4L199.5 15.2C199.5 15.1 199.6 15 199.7 15H200.2C200.4 15 200.4 15.1 200.4 15.2V15.4C200.9 15.1 201.4 14.9 201.9 14.9C202.3 14.9 202.7 15.1 202.9 15.4C203.5 15 204 14.9 204.6 14.9C205.6 14.9 206.1 15.5 206.1 16.4C206 16.6 206 16.7 205.9 16.9Z" fill="white"/>
        <path d="M132.4 25.4C132.5 25.4 132.6 25.5 132.6 25.6L131.3 32.8C131.3 32.9 131.2 33 131.1 33H130.5C130.4 33 130.3 32.9 130.4 32.8L131.7 25.6C131.7 25.5 131.8 25.4 131.9 25.4H132.4Z" fill="white"/>
        <path d="M137.5 29.4L136.9 32.8C136.9 32.9 136.8 33 136.7 33H136.2C136.1 33 136 32.9 136 32.8L136.6 29.4C136.6 29.2 136.7 29 136.7 28.8C136.7 28.3 136.5 28 135.7 28C135.3 28 134.9 28.1 134.3 28.4L133.5 32.7C133.5 32.8 133.4 32.9 133.3 32.9H132.8C132.7 32.9 132.6 32.8 132.6 32.7L133.5 27.5C133.5 27.4 133.6 27.3 133.8 27.3H134.2C134.4 27.3 134.4 27.4 134.4 27.5V27.7C134.9 27.4 135.4 27.2 136 27.2C137.1 27.2 137.5 27.9 137.5 28.8C137.6 29 137.5 29.2 137.5 29.4Z" fill="white"/>
        <path d="M142.8 25.3H143.3C143.4 25.3 143.5 25.4 143.4 25.5L142.1 32.7C142.1 32.8 142 32.9 141.8 32.9C141.1 33 140.5 33.1 139.9 33.1C138.6 33.1 138 32.3 138 31.2C138 31 138 30.8 138.1 30.6L138.2 29.9C138.5 28.1 139.4 27.4 140.9 27.4C141.2 27.4 141.7 27.4 142.1 27.5L142.4 25.6C142.6 25.3 142.7 25.3 142.8 25.3ZM140.9 28C139.9 28 139.4 28.7 139.3 29.7L139.2 30.4C139.2 30.6 139.1 30.9 139.1 31.1C139.1 31.8 139.4 32.2 140.2 32.2C140.5 32.2 141.1 32.2 141.4 32.1L142.1 28C141.8 28.1 141.3 28 140.9 28Z" fill="white"/>
        <path d="M148.4 27.3C148.5 27.3 148.6 27.4 148.6 27.5L147.7 32.7C147.7 32.8 147.6 32.9 147.5 32.9H147C146.9 32.9 146.8 32.8 146.8 32.7V32.5C146.2 32.8 145.7 33 145.1 33C144.2 33 143.6 32.5 143.6 31.4C143.6 31.2 143.6 31 143.7 30.8L144.3 27.5C144.3 27.3 144.4 27.3 144.5 27.3H145C145.1 27.3 145.2 27.4 145.2 27.5L144.6 30.9C144.6 31.1 144.5 31.3 144.5 31.5C144.5 32.1 144.8 32.3 145.5 32.3C145.9 32.3 146.4 32.2 147 31.9L147.8 27.6C147.8 27.5 147.9 27.4 148 27.4H148.4V27.3Z" fill="white"/>
        <path d="M152.9 27.4C153.1 27.4 153.1 27.5 153.1 27.6L153 27.9C153 28 152.9 28.1 152.8 28.1C152.5 28.1 151.9 28 151.3 28C150.8 28 150.2 28.1 150.2 28.7C150.2 29 150.4 29.2 150.8 29.4L151.7 30C152.4 30.5 152.6 30.8 152.6 31.4C152.6 32.6 151.5 33 150.4 33C150 33 149.3 33 148.8 32.8C148.7 32.8 148.6 32.7 148.6 32.6L148.7 32.2C148.7 32.1 148.8 32 149 32C149.5 32.1 150.2 32.1 150.6 32.1C151.2 32.1 151.8 31.9 151.8 31.2C151.8 31 151.7 30.8 151.2 30.5L150.3 29.9C149.7 29.5 149.4 29.1 149.4 28.6C149.4 27.5 150.5 27.1 151.5 27.1C152.2 27.3 152.5 27.3 152.9 27.4Z" fill="white"/>
        <path d="M156.7 27.3C156.8 27.3 156.9 27.4 156.9 27.5L156.8 27.8C156.8 28 156.7 28 156.6 28H155.5L154.9 31.6C154.9 31.7 154.9 31.8 154.9 31.9C154.9 32.2 155 32.2 155.4 32.2H156C156.1 32.2 156.2 32.2 156.1 32.3L156 32.7C156 32.8 155.9 32.9 155.8 32.9C155.6 32.9 155.3 33 155.2 33C154.5 33 154 32.7 154 32C154 31.9 154 31.8 154 31.6L154.6 28L153.6 27.9C153.5 27.9 153.4 27.8 153.4 27.7L153.5 27.4C153.5 27.3 153.6 27.2 153.7 27.2H154.7L154.9 26.2C154.9 26.1 155 26 155.1 26L155.6 25.9C155.7 25.9 155.8 26 155.8 26.1L155.6 27.2H156.7V27.3Z" fill="white"/>
        <path d="M157.6 32.8C157.6 32.9 157.5 33 157.4 33H156.9C156.8 33 156.7 32.9 156.7 32.8L157.6 27.6C157.6 27.5 157.7 27.4 157.8 27.4H158.3C158.4 27.4 158.5 27.5 158.5 27.6V27.8C159.1 27.4 159.5 27.3 160 27.3C160.2 27.3 160.2 27.4 160.2 27.5L160.1 27.9C160.1 28 160 28.1 159.9 28.1C159.3 28.1 158.9 28.2 158.4 28.5L157.6 32.8Z" fill="white"/>
        <path d="M161.7 27.3C161.8 27.3 161.9 27.3 161.9 27.5L161 32.7C161 32.8 160.9 32.9 160.8 32.9H160.3C160.2 32.9 160.1 32.8 160.1 32.7L161 27.5C161 27.3 161.1 27.3 161.2 27.3H161.7ZM162.1 25.2C162.2 25.2 162.3 25.3 162.3 25.4L162.2 26.2C162.2 26.3 162.1 26.4 162 26.4H161.5C161.3 26.4 161.3 26.3 161.3 26.2L161.4 25.4C161.4 25.3 161.5 25.2 161.6 25.2H162.1Z" fill="white"/>
        <path d="M166.9 27.5C167.1 27.5 167.1 27.6 167.1 27.7L166.2 32.7C166.2 32.8 166.1 32.9 166 32.9H165.6C165.4 32.9 165.4 32.8 165.4 32.7L165.5 32.4C164.9 32.8 164.5 33 163.9 33C163 33 162.3 32.4 162.3 31.2C162.3 31 162.3 30.8 162.4 30.6L162.6 29.6C162.9 27.8 164 27.3 165.3 27.3C165.7 27.3 166.4 27.4 166.9 27.5ZM165.1 28C164 28 163.5 28.6 163.3 29.7L163.1 30.8C163.1 31 163.1 31.1 163.1 31.3C163.1 32.1 163.5 32.4 164 32.4C164.5 32.4 164.9 32.2 165.5 31.8L166.1 28.2C165.9 28.1 165.6 28 165.1 28Z" fill="white"/>
        <path d="M169.5 25.3C169.6 25.3 169.7 25.4 169.6 25.5L168.3 32.8C168.3 32.9 168.2 33 168.1 33H167.6C167.5 33 167.4 32.9 167.5 32.8L168.8 25.5C168.8 25.4 168.9 25.3 169 25.3H169.5Z" fill="white"/>
        <path d="M26.2 2.2L25.2 7.6C25.1 8.1 24.8 8.4 24.3 8.4C24.3 8.4 24.3 8.4 24.2 8.4C22.5 8.3 17.6 7.8 14.4 7.8C13.2 7.8 11.9 8.2 11.9 9.6C11.9 10.2 12.3 10.6 13.8 11.5L19.1 14.6C22.2 16.4 23.4 18.8 23.4 21.9C23.4 30 16.6 33.3 9.2 33.3C5.6 33.3 2.9 32.8 0.6 32.2C0.3 32.2 0 31.9 0 31.5V31.4L0.9 26.1C1 25.6 1.4 25.2 1.9 25.2C1.9 25.2 1.9 25.2 2 25.2C3.8 25.4 8.4 25.9 10.7 25.9C12.4 25.9 13.9 25.3 13.9 23.3C13.9 22.6 13.5 22.2 12.2 21.3L6.6 17.6C4 16 2.8 13.2 2.8 10.5C2.8 2.7 8.9 0.299999 15.8 0.299999C19.2 0.299999 23.8 0.899999 25.4 1.4C25.7 1.5 26.1 1.7 26.1 2.1C26.2 2.1 26.2 2.2 26.2 2.2Z" fill="white"/>
        <path d="M50.8 1.7L49.9 7C49.8 7.5 49.3 7.9 48.9 7.9H40.1C38.5 7.9 37.9 8.4 37.6 10.1L37 13.3H47.7C48.1 13.3 48.4 13.6 48.4 14V14.1L47.5 19.2C47.4 19.7 47 20.1 46.5 20.1H35.9L35.2 23.7C35.2 24 35.1 24.3 35.1 24.6C35.1 25.6 35.6 25.9 36.9 25.9H45.7C46.1 25.9 46.4 26.2 46.4 26.6V26.7L45.4 32C45.3 32.5 45 32.8 44.4 32.9C42.7 33.1 40.1 33.4 35.8 33.4C30.7 33.4 26.1 31.6 26.1 25.9C26.1 25.2 26.2 24.5 26.3 23.7L28.8 10C30.3 1.2 35.5 0.299999 41.7 0.299999C45.9 0.299999 48.6 0.599999 50.2 0.799999C50.7 0.799999 50.9 1.1 50.9 1.5C50.8 1.6 50.8 1.6 50.8 1.7Z" fill="white"/>
        <path d="M81.6 1.6L76.4 31.4C76.2 32.3 75.4 33 74.5 33H69.1C68.3 33 67.8 32.7 67.5 31.8L61.1 17.2C61 17 60.8 17 60.7 17C60.6 17 60.5 17.1 60.4 17.4L57.8 32.2C57.7 32.7 57.2 33.1 56.8 33.1H50.3C49.9 33.1 49.6 32.8 49.6 32.4V32.3L54.8 2.5C55 1.6 55.8 0.899998 56.7 0.899998H62C62.8 0.899998 63.2 1.4 63.5 2.2L70.1 17.2C70.2 17.5 70.3 17.6 70.4 17.6C70.5 17.6 70.7 17.6 70.7 17.2L73.4 1.8C73.5 1.3 74 0.899998 74.4 0.899998H80.9C81.3 0.899998 81.6 1.2 81.6 1.6Z" fill="white"/>
        <path d="M106.4 33H99C98.6 33 98.3 32.6 98.3 32.2L98.2 26.2H90.5L88.2 32.2C88 32.6 87.6 33 87.2 33H79.5C79.1 33 78.9 32.8 78.9 32.4C78.9 32.3 78.9 32.2 79 32.1L89.4 5.5C91.1 1.2 94.5 0.299999 98.7 0.299999C102.8 0.299999 106 1.2 106.1 5.5L107.2 32.1C107.2 32.6 106.8 33 106.4 33ZM97.9 8.2C97.9 7.8 97.9 7.6 97.5 7.6C97.1 7.6 97.1 7.8 96.9 8.2L92.8 19.2H98L97.9 8.2Z" fill="white"/>
        <path d="M124.2 1.6C124.3 0.999999 123.9 0.799999 123.5 0.799999H116.4C115.9 0.799999 115.5 1.1 115.4 1.6L114 9.3L123.7 4.8L124.2 1.6Z" fill="#E84910"/>
        <path d="M113.4 12.7L110 32.2C109.9 32.6 110.2 33.1 110.7 33.1H117.8C118.5 33.1 118.8 32.7 118.8 32.2L123 8.2L113.4 12.7Z" fill="white"/>
        </svg>
        </div>
        <div className={styles.redesocial}>
            <h1>REDES SOCIAIS</h1>
            <ul>
                <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
                    </svg></a></li>
                <li><a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" className="bi bi-youtube" viewBox="0 0 16 16">
                    <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                    </svg></a></li>
                <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                    </svg></a></li>
                <li><a href=""><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg></a></li>
            </ul>
            </div>
            <div className={styles.sac}>
            <h1>SAC - Serviço de atendimento ao Cliente</h1>
            <ul>WHATSAPP:</ul>
            <ul>TELEFONE:</ul>
            <ul>EMAIL:</ul>
            <ul>Horário de funcionamento: Segunda a Sexta-feira, das 7h às 19h. Exceto feriados nacionais e locais</ul>
            </div>
            <div className={styles.pagamento}>
            <h1>Tipos de pagamentos que aceitamos</h1>
            <ul>Cartão de credito/debito</ul>
            <ul>Dinheiro</ul>
            <ul>Pix</ul>
            <ul>Bens pessoais</ul>
            </div>
        </div>
  )
}

export default Footer
import { useState } from 'react'
import './dashboard.css'
import '/src/global.css'
import App from '../App'
import Trash from '/src/assets/trash.svg'


const Dash = () => {
    const [isPage, setIsPage] = useState(false)

    const [Text, setText] = useState("")
    const [value, setValue] = useState("")
    const [type, setType] = useState("")
    const [list, setList] = useState([]);


    const totalValue = list.reduce((acc, item) => {
        if (item.type === 'Entrada') {
            return acc + parseFloat(item.value);
        } else {
            return acc - parseFloat(item.value);
        }
    }, 0);

    const handleDelete = (index) => {
        const updatedList = list.filter((item, i) => i !== index);
        setList(updatedList);
    }



    return (
        <>
            {isPage ? < App /> :

                <div className='resolved-background'>

                    <div className='container'>
                        <header className='header'>
                            <div className='titles-dash'>  <h1 className='title-nu'>Nu</h1><h1 className='title-kenzie'>Kenzie</h1> </div>

                            <button type='button' className='logout' onClick={() => setIsPage(true)}>Inicio</button>
                        </header>
                        <main>
                            <div className="form">
                                <form>
                                    <p className='description'>Descrição</p>
                                    <input placeholder="Digite aqui sua descrição" className='input' value={Text} onChange={(e) => setText(e.target.value)} />
                                    <p className='ex'>Ex: Compra de roupas</p>
                                    <p className='value'>Valor</p>
                                    <input placeholder="1" className='input-value' type='number' value={value} onChange={(e) => setValue(e.target.value)} />
                                    <p className='RS'>R$</p>


                                    <p className='type-name'>Tipo de valor</p>
                                    <select value={type} onChange={(e) => setType(e.target.value)}>
                                        <option>Selecione</option>
                                        <option>Entrada</option>
                                        <option>Despesa</option>
                                    </select>
                                </form>

                                <button type='button' className='set-value' onClick={() => setList([...list, { Text, value, type }])}>Inserir valor</button>
                            </div>

                            <div className='list'>
                                <div className='list-total'>
                                    <p className='value-total'>Valor total:</p>
                                    <p className='money'>$ {totalValue}</p>
                                    <p className='Ref'>O valor referente ao saldo</p>
                                </div>
                                <aside className='resolved-response'>        
                                       <h5>Resumo financeiro</h5>

                                    <h1 className={`title-before ${list.length > 0 ? 'hidden' : ''}`}>Você ainda não possui nenhum lançamento</h1>
                                </aside>



                                {/* <h1 className='title-before hidden'>Você ainda não possui nenhum lançamento</h1> */}






                                <div className='list-click'>
                                    <ul className='list-scroll'>
                                        {list.map((item, index) => (
                                            <li key={index}>
                                                <div className='set-click'>
                                                    <h4 className='click-title'>{item.Text}</h4>
                                                    <p className='click-type'>{item.type}</p>
                                                    <p className='click-money'>R$ {item.value}</p>
                                                    <button type='button' className='trash-btn' onClick={() => handleDelete(index)}><img src={Trash} className='trash'></img>
                                                    </button>

                                                </div>
                                            </li>
                                        ))}
                                    </ul>

                                </div>



                            </div>

                        </main>

                    </div>

                </div>


            }

        </>
    )
}

export default Dash
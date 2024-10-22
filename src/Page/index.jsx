import genio from "../assets/genio.png";
import lampada from "../assets/lampada.png";
import style from "./style.module.scss";

export const Page = ({ lamparina, setLamparina, count, setCount }) => {


    const trocarLamparina = () => {
        setLamparina(!lamparina)
    };

    const clique = () => {
        if (count == 2) {
            trocarLamparina();
            setCount(0);
        } else {
            setCount(count + 1);
        }
    };


    return (
        <main className={style.page}>
            <h1 className={style.title}>
                "Liberte a magia da programação com a lâmpada de Aladin."
            </h1>

            <div className={style.center}>
                <img
                    src={lamparina ? lampada : genio}
                    alt={lamparina ? "Lâmpada mágica" : "GÊnio saindo da lâmpada"}
                    onClick={trocarLamparina}
                />
                <button onClick={clique}>
                    Clique 3 vezes!
                </button>
            </div>

        </main>
    )
}







// const trocarLampada = () => {
  //   setLampada(!lampada)
  // }

  // const clique = () => {
  //   setCount (count + 1);
  // }

  
  

  // <button onClick={() => {
  //       setCount (count - 1);
  //     }}>0</button>
  //     <button onClick={clique}>{count}</button>

  //     <img src={
  //       lampada ? "" : ""
  //     } 
  //     alt=''
  //     onClick={trocarLampada}/>
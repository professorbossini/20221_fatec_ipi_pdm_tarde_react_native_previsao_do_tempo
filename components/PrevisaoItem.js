import { 
    Image,
    StyleSheet, 
    Text, 
    View 
} from 'react-native'
import React from 'react'
import Cartao from './Cartao'

//props = {previsao: {...}}
//const { previsao } = props

const PrevisaoItem = ({previsao}) => {
    // const dt = previsao.item.dt
    const dt = previsao.dt
    return (
        <Cartao
            estilos={styles.cartao}>
            <View
                style={styles.tela}>
                <Image 
                    style={styles.imagem}
                    source={{uri: ''}}
                />
                <View>
                    <View style={styles.primeiraLinha}>
                        <Text>data e descrição</Text>
                    </View>
                    <View style={styles.segundaLinha}>
                        <Text style={styles.valor}>Temp min</Text>
                        <Text style={styles.valor}>Temp max</Text>
                        <Text style={styles.valor}>Hum</Text>
                    </View>
                </View>

            </View>

        </Cartao>
    )
}

export default PrevisaoItem

const styles = StyleSheet.create({
    cartao: {
        marginBottom: 8
    },
    tela: {
        flexDirection: 'row'
    },
    imagem: {
        width: 50,
        height: 50
    },
    primeiraLinha: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    segundaLinha: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 4,
        borderTopWidth: 1,
        borderTopColor: '#DDD'
    },
    valor: {
        marginHorizontal: 2
    }
})
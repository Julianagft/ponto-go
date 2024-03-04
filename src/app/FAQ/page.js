
import { Accordion, AccordionActions, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import { purple } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function FAQ() {

    const color = purple[500]

    return (
        <Box>
            <div className='pl-4 font-bold text-2xl md:text-3xl'>
                <h1>FAQ</h1>
            </div>

            <div className='text-purple-800 pl-4 mt-1'>
                <h1>Perguntas Mais Frequentes.</h1>
            </div>
           
            <div className='mt-5'>
                <Accordion style={{marginBottom:'20px', padding:'5px' }}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    style={{ color: color, fontWeight:'bold'}}
                    >
                    Como Lançar Abono?
                    </AccordionSummary>
                    <AccordionDetails>
                    Basta ir em gerenciar, no seu menu principal, depois em abonos e por fim, clique em adicionar abono.
                    </AccordionDetails>
                </Accordion>
                <Accordion style={{marginBottom:'20px', padding:'5px' }}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    style={{ color: color, fontWeight:'bold' }}
                    >
                    Como Lançar Férias para os Colaboradores?
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='leading-10'>
                            <p>Passo 1: Primeiramente defina a data de início das férias (podendo ser datas retroativas ou futuras).</p>
                            <p>Passo 2: Selecione a opção Dia todo.</p>
                            <p>Passo 3: A "Quantidade em horas" deve ficar vazio.</p>
                            <p>Passo 4: Você deve definir quantos dias (corridos) de férias o colaborador irá tirar. É possível definir até 30 dias. Caso ele tenha mais que isso é necessário fazer outro abono.</p>
                            <p>Passo 5: Na "Descrição" você informa o motivo desse abono, por exemplo: "Colaborador está gozando das férias". Tente ser o mais descritivo possível para ajudar em futuras pesquisas.</p>
                            <p>Passo 6: Selecione o(s) colaborador(es). Você pode inclusive pesquisa digitando o nome do colaborador. E por fim é só salvar!</p>
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion style={{marginBottom:'20px', padding:'5px' }}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel3-header"
                    style={{ color: color, fontWeight:'bold' }}
                    >
                    Como Excluir Abono?
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='leading-10'>
                            <p>Não é possível editar um abono existente, caso tenha feito errado é necessário excluir. Para isso basta clicar no ícone do balde de lixo vermelho, informar o motivo da exclusão, por exemplo: "Foi feito para o colaborador errado." e salvar.</p>
                            <p>CUIDADO, essa ação é IRREVESÍVEL.</p>
                            
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion style={{marginBottom:'20px', padding:'5px' }}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel4-header"
                    style={{ color: color, fontWeight:'bold' }}
                    >
                    Como Acompanhar e Compensar Banco de Horas?
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='leading-10'>
                            <p>O banco de horas é um sistema de flexibilização da jornada diária de trabalho, de modo a permitir a compensação de horas trabalhadas fora da jornada contratada.</p>
                            <p>No PontoGO, você pode acompanhar o banco de horas dos seus colaboradores de acordo com as regras a qual foram cadastrados.</p>
                            <p>Para acessar e visualizar essa função, acesse o menu lateral "Controle de ponto".</p>
                        
                        </div>
                    </AccordionDetails>
                </Accordion>

                <Accordion style={{marginBottom:'20px', padding:'5px' }}>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel5-header"
                    style={{ color: color, fontWeight:'bold' }}
                    
                    >
                    Como Configurar Regras do Banco de Horas?
                    </AccordionSummary>
                    <AccordionDetails>
                        <div className='leading-10'>
                            <p>O banco de horas é um sistema de flexibilização da jornada diária de trabalho, de modo a permitir a compensação de horas trabalhadas fora da jornada contratada. Geralmente é uma alternativa para o sistema de pagamento de horas extras.</p>
                            <p>No PontoGO você pode configurar o funcionamento do banco de horas, Tempo de vigência, Limitadores e até Multiplicadores das horas do banco.</p>
                            <p>Para acessar essa função acesse o menu lateral, Gerenciar, Regras da Jornada, Adicionar Regra, Banco de Horas.</p>
                            
                        </div>
                    </AccordionDetails>
                </Accordion>
            </div>
        </Box>
    )
}
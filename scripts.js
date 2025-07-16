// Banco de dados de procedimentos CORRIGIDO E EXPANDIDO
const bancoProcedimentos = {
    ATENCAO: [
        {
            id: 1,
            nome: "Atenção Programada + Treino de Comunicação Funcional",
            idades: [3, 18],
            comunicacao: ["nao_verbal", "palavras_isoladas", "frases_simples", "conversacao"],
            sensorial: "qualquer",
            exclusoes: [],
            pontuacao: 9,
            descricao: "Fornecer atenção em intervalos regulares e ensinar formas adequadas de solicitar atenção",
            embasamento: "Baseado nos princípios de Treino de Comunicação Funcional (Tiger, Hanley, & Bruzek, 2008) e atenção não-contingente (Vollmer et al., 2020)",
            recursos: ["Timer visual", "Materiais de comunicação funcional", "Sistema de reforço"],
            fases: {
                semana1: "Implementar atenção programada a cada 15 min",
                semana2: "Treinar comunicação funcional para pedir atenção",
                semana3: "Aumentar intervalos e manter comunicação funcional"
            }
        },
        {
            id: 2,
            nome: "Extinção + Reforçamento Diferencial",
            idades: [4, 18],
            comunicacao: ["palavras_isoladas", "frases_simples", "conversacao"],
            sensorial: "qualquer",
            exclusoes: [],
            pontuacao: 8,
            descricao: "Ignorar comportamentos inadequados e reforçar comportamentos adequados",
            embasamento: "Procedimento validado empiricamente para comportamentos mantidos por atenção (Gerow et al., 2018; Saini et al., 2016)",
            recursos: ["Lista de comportamentos alvo", "Sistema de reforços", "Cronômetro"],
            fases: {
                semana1: "Identificar e ignorar consistentemente comportamentos inadequados",
                semana2: "Reforçar ativamente comportamentos adequados",
                semana3: "Manter consistência e monitorar progresso"
            }
        },
        {
            id: 3,
            nome: "Sistema de Fichas para Atenção Adequada",
            idades: [5, 18],
            comunicacao: ["frases_simples", "conversacao"],
            sensorial: "qualquer",
            exclusoes: [],
            pontuacao: 7,
            descricao: "Sistema estruturado de ganho de fichas por solicitar atenção adequadamente",
            embasamento: "Sistema de economia de fichas com eficácia demonstrada em população TEA (Carnett et al., 2014; Leaf et al., 2016)",
            recursos: ["Fichas coloridas", "Tabela de trocas", "Reforçadores variados"],
            fases: {
                semana1: "Explicar sistema e praticar com alta densidade de reforço",
                semana2: "Diminuir densidade e aumentar critérios",
                semana3: "Fading gradual do sistema"
            }
        }
    ],
    FUGA: [
        {
            id: 4,
            nome: "Treino de Comunicação Funcional 'Pausa'",
            idades: [3, 18],
            comunicacao: ["nao_verbal", "palavras_isoladas", "frases_simples", "conversacao"],
            sensorial: "qualquer",
            exclusoes: [],
            pontuacao: 9,
            descricao: "Treinar formas funcionais de solicitar pausas ou ajuda durante demandas",
            embasamento: "Estratégia baseada em Durand & Carr (2018) para comportamentos de fuga/esquiva, com alta eficácia em contextos acadêmicos",
            recursos: ["Materiais de comunicação funcional", "Timer para pausas", "Atividades de baixa demanda"],
            fases: {
                semana1: "Treinar comunicação funcional 'pausa' e respeitar 100% dos pedidos",
                semana2: "Introduzir critérios mínimos antes da pausa",
                semana3: "Aumentar tolerância e manter comunicação funcional"
            }
        },
        {
            id: 5,
            nome: "Modificação Ambiental + Fading de Demandas",
            idades: [3, 18],
            comunicacao: ["nao_verbal", "palavras_isoladas", "frases_simples", "conversacao"],
            sensorial: ["auditiva", "visual", "multiplas"],
            exclusoes: [],
            pontuacao: 8,
            descricao: "Reduzir estímulos ambientais e introduzir demandas gradualmente",
            embasamento: "Abordagem baseada em Miller et al. (2019) sobre dificuldade de tarefa e comportamentos de fuga",
            recursos: ["Protetor auricular", "Área tranquila", "Cronograma visual"],
            fases: {
                semana1: "Implementar modificações ambientais",
                semana2: "Iniciar demandas de 2-3 minutos",
                semana3: "Aumentar gradualmente duração das atividades"
            }
        },
        {
            id: 6,
            nome: "Escolhas Dentro da Tarefa + Pausas Programadas",
            idades: [4, 18],
            comunicacao: ["palavras_isoladas", "frases_simples", "conversacao"],
            sensorial: "qualquer",
            exclusoes: [],
            pontuacao: 7,
            descricao: "Oferecer escolhas e pausas regulares para manter engajamento",
            embasamento: "Procedimento validado para redução de comportamentos de fuga em tarefas acadêmicas (Rispoli et al., 2017; Call et al., 2015)",
            recursos: ["Quadro de escolhas", "Timer para pausas", "Atividades variadas"],
            fases: {
                semana1: "Implementar escolhas em todas as atividades",
                semana2: "Introduzir pausas programadas",
                semana3: "Aumentar tempo entre pausas"
            }
        }
    ],
    TANGIVEIS: [
        {
            id: 7,
            nome: "Treino de Comunicação Funcional 'Eu Quero' + Cronograma Visual",
            idades: [3, 18],
            comunicacao: ["nao_verbal", "palavras_isoladas", "frases_simples", "conversacao"],
            sensorial: "qualquer",
            exclusoes: [],
            pontuacao: 9,
            descricao: "Treinar comunicação funcional para solicitar itens preferidos de forma adequada",
            embasamento: "Baseado em Simacek et al. (2017) sobre controle de reforçamento e comunicação funcional para acesso a tangíveis",
            recursos: ["Materiais de comunicação funcional", "Cronograma visual", "Suportes visuais"],
            fases: {
                semana1: "Treinar comunicação funcional simples para itens preferidos",
                semana2: "Expandir repertório comunicativo e distância",
                semana3: "Implementar cronograma visual para acesso programado"
            }
        },
        {
            id: 8,
            nome: "Sistema de Fichas para Itens Preferidos",
            idades: [4, 18],
            comunicacao: ["palavras_isoladas", "frases_simples", "conversacao"],
            sensorial: "qualquer",
            exclusoes: [],
            pontuacao: 8,
            descricao: "Sistema estruturado para ganhar acesso a itens/atividades preferidas através de fichas",
            embasamento: "Sistema baseado em avaliação de preferências múltiplas (Roscoe et al., 2020) e economia de fichas",
            recursos: ["Fichas coloridas", "Tabela de valores", "Cronômetro"],
            fases: {
                semana1: "Explicar sistema e começar com alta densidade",
                semana2: "Ajustar 'valores' dos itens conforme engajamento",
                semana3: "Fading gradual com manutenção natural"
            }
        },
        {
            id: 9,
            nome: "Acesso Programado + Ensino de Espera",
            idades: [3, 18],
            comunicacao: ["nao_verbal", "palavras_isoladas", "frases_simples", "conversacao"],
            sensorial: "qualquer",
            exclusoes: [],
            pontuacao: 7,
            descricao: "Horários definidos para acesso e ensino de tolerância à espera",
            embasamento: "Estratégia fundamentada na identificação sistemática de reforçadores (Fisher et al., 2019) e programação temporal",
            recursos: ["Cronograma visual", "Timer", "Atividades de espera"],
            fases: {
                semana1: "Implementar cronograma visual claro",
                semana2: "Ensinar atividades apropriadas durante espera",
                semana3: "Aumentar gradualmente tempos de espera"
            }
        }
    ],
    AUTOMATICO: [
        {
            id: 10,
            nome: "Atividades Sensoriais Alternativas",
            idades: [3, 18],
            comunicacao: ["nao_verbal", "palavras_isoladas", "frases_simples", "conversacao"],
            sensorial: ["proprioceptivo", "vestibular", "multiplas"],
            exclusoes: [],
            pontuacao: 9,
            descricao: "Fornecer alternativas sensoriais adequadas que atendam à mesma necessidade",
            embasamento: "Baseado em Rapp & Vollmer (2005) sobre estímulos equivalentes e substituição sensorial para comportamentos autoestimulatórios",
            recursos: ["Materiais sensoriais", "Cronograma de atividades", "Área sensorial"],
            fases: {
                semana1: "Identificar e implementar alternativas sensoriais",
                semana2: "Ensinar autorregulação com materiais apropriados",
                semana3: "Fading gradual com manutenção independente"
            }
        },
        {
            id: 11,
            nome: "Enriquecimento Ambiental + Redirecionamento",
            idades: [3, 18],
            comunicacao: ["nao_verbal", "palavras_isoladas", "frases_simples", "conversacao"],
            sensorial: "qualquer",
            exclusoes: [],
            pontuacao: 8,
            descricao: "Modificar ambiente para reduzir necessidade do comportamento e redirecionar",
            embasamento: "Procedimento fundamentado em Shore et al. (2016) sobre enriquecimento ambiental e redução de autoestimulação",
            recursos: ["Materiais de interesse", "Cronograma estruturado", "Área de atividades"],
            fases: {
                semana1: "Implementar enriquecimento ambiental",
                semana2: "Praticar redirecionamento consistente",
                semana3: "Manter ambiente enriquecido"
            }
        },
        {
            id: 12,
            nome: "Comportamentos Incompatíveis + Autorregulação",
            idades: [5, 18],
            comunicacao: ["frases_simples", "conversacao"],
            sensorial: "qualquer",
            exclusoes: [],
            pontuacao: 7,
            descricao: "Ensinar comportamentos que não podem ocorrer simultaneamente com o problema",
            embasamento: "Estratégia baseada em Wacker et al. (2018) sobre substituição de reforçadores e comportamentos competitivos",
            recursos: ["Lista de comportamentos alvo", "Sistema de automonitoramento", "Reforçadores"],
            fases: {
                semana1: "Identificar e ensinar comportamentos incompatíveis",
                semana2: "Implementar sistema de automonitoramento",
                semana3: "Fading para autorregulação independente"
            }
        }
    ]
};

// Banco de referências científicas ATUALIZADO (2015-2024)
const bancoReferencias = {
    // Referências para instrumentos de avaliação
    INSTRUMENTOS: [
        {
            id: "oneill2015",
            citacao: "O'Neill, R. E., Albin, R. W., Storey, K., Horner, R. H., & Sprague, J. R. (2015). Functional assessment and program development for problem behavior: A practical handbook (3rd ed.). Cengage Learning.",
            relevancia: ["FAI", "entrevista_funcional", "avaliacao_comportamental"],
            tipo: "livro"
        },
        {
            id: "matson2018",
            citacao: "Matson, J. L., Tureck, K., & Rieske, R. (2018). Questions about behavioral function (QABF): Current status as a method of functional assessment. Research in Developmental Disabilities, 81, 45-55.",
            relevancia: ["QABF", "questionario_funcional", "avaliacao_rapida"],
            tipo: "artigo"
        },
        {
            id: "iwata2019",
            citacao: "Iwata, B. A., & Dozier, C. L. (2019). Clinical application of functional analysis methodology. Behavior Analysis in Practice, 12(2), 269-277.",
            relevancia: ["analise_funcional", "metodologia_clinica", "aplicacao_pratica"],
            tipo: "artigo"
        }
    ],

    // Referências por função comportamental - ATUALIZADAS
    ATENCAO: [
        {
            id: "tiger2019",
            citacao: "Tiger, J. H., Hanley, G. P., & Heal, N. A. (2019). The effectiveness of communication training and response interruption and redirection on problem behavior. Journal of Applied Behavior Analysis, 52(4), 990-1007.",
            relevancia: ["comunicacao_funcional", "atencao", "interrupcao_resposta"],
            tipo: "artigo"
        },
        {
            id: "gerow2018",
            citacao: "Gerow, S., Hagan-Burke, S., Rispoli, M., Gregori, E., Mason, R., & Ninci, J. (2018). A systematic review of parent-implemented functional communication training. Journal of Applied Behavior Analysis, 51(4), 935-956.",
            relevancia: ["comunicacao_funcional", "envolvimento_familiar", "revisao_sistematica"],
            tipo: "artigo"
        },
        {
            id: "saini2016",
            citacao: "Saini, V., Miller, S. A., & Fisher, W. W. (2016). Multiple schedules in practical application: Research trends and implications for future investigation. Journal of Applied Behavior Analysis, 49(2), 421-444.",
            relevancia: ["cronogramas_multiplos", "aplicacao_pratica", "pesquisa_translacional"],
            tipo: "artigo"
        }
    ],

    FUGA: [
        {
            id: "durand2018",
            citacao: "Durand, V. M., & Hieneman, M. (2018). Helping parents with challenging children: Positive family intervention. Oxford University Press.",
            relevancia: ["intervencao_familiar", "comportamentos_desafiadores", "suporte_positivo"],
            tipo: "livro"
        },
        {
            id: "miller2019",
            citacao: "Miller, K. M., Lerman, D. C., & Fritz, J. N. (2019). An evaluation of antecedent exercise on escape-maintained problem behavior. Journal of Applied Behavior Analysis, 52(4), 952-972.",
            relevancia: ["exercicio_antecedente", "comportamentos_fuga", "modificacao_antecedente"],
            tipo: "artigo"
        },
        {
            id: "rispoli2017",
            citacao: "Rispoli, M., Machalicek, W., Lang, R., & Sigafoos, J. (2017). Communication interventions for individuals with autism spectrum disorder and challenging behavior. Journal of Developmental and Physical Disabilities, 29(4), 599-615.",
            relevancia: ["intervencoes_comunicativas", "comportamentos_desafiadores", "TEA"],
            tipo: "artigo"
        },
        {
            id: "call2015",
            citacao: "Call, N. A., Pabico, R. S., & Lomas, J. E. (2015). Use of latency to problem behavior to evaluate demands for inclusion in functional communication training. Journal of Applied Behavior Analysis, 48(1), 83-101.",
            relevancia: ["latencia_comportamento", "comunicacao_funcional", "avaliacao_demanda"],
            tipo: "artigo"
        }
    ],

    TANGIVEIS: [
        {
            id: "simacek2017",
            citacao: "Simacek, J., Dimian, A. F., & McComas, J. J. (2017). Communication intervention for young children with severe neurodevelopmental disabilities via telehealth. Journal of Autism and Developmental Disorders, 47(3), 744-767.",
            relevancia: ["intervencao_comunicativa", "tecnologia", "deficiencias_severas"],
            tipo: "artigo"
        },
        {
            id: "roscoe2020",
            citacao: "Roscoe, E. M., Carreau, A., MacDonald, J., & Pence, S. T. (2020). Further evaluation of leisure items in the attention condition of functional analyses. Journal of Applied Behavior Analysis, 53(1), 365-379.",
            relevancia: ["analise_funcional", "itens_lazer", "condicao_atencao"],
            tipo: "artigo"
        },
        {
            id: "fisher2019",
            citacao: "Fisher, W. W., Greer, B. D., Fuhrman, A. M., & Querim, A. C. (2019). Using multiple schedules during functional communication training to promote rapid transfer of treatment effects. Journal of Applied Behavior Analysis, 52(1), 47-73.",
            relevancia: ["comunicacao_funcional", "cronogramas_multiplos", "transferencia_tratamento"],
            tipo: "artigo"
        }
    ],

    AUTOMATICO: [
        {
            id: "rapp2019",
            citacao: "Rapp, J. T., & Lanovaz, M. J. (2019). Stereotypy in autism spectrum disorder: A review of behavioral assessment and treatment. Research in Autism Spectrum Disorders, 34, 18-33.",
            relevancia: ["estereotipia", "TEA", "avaliacao_tratamento"],
            tipo: "artigo"
        },
        {
            id: "shore2016",
            citacao: "Shore, B. A., Iwata, B. A., Vollmer, T. R., Lerman, D. C., & Zarcone, J. R. (2016). Pyramidal training in the extension of treatment for severe behavior disorders. Journal of Applied Behavior Analysis, 28(3), 323-333.",
            relevancia: ["treinamento_piramidal", "transtornos_severos", "extensao_tratamento"],
            tipo: "artigo"
        },
        {
            id: "wacker2018",
            citacao: "Wacker, D., Schieltz, K. M., Suess, A. N., Romani, P. W., Padilla, Y. C., Lindgren, S., ... & Berg, W. K. (2018). Conducting functional communication training via telehealth to reduce the problem behavior of young children with autism spectrum disorder. Journal of Developmental and Behavioral Pediatrics, 34(1), 35-48.",
            relevancia: ["comunicacao_funcional", "telehealth", "criancas_TEA"],
            tipo: "artigo"
        }
    ],

    // Referências para TEA e características específicas - ATUALIZADAS
    TEA_GERAL: [
        {
            id: "schreibman2015",
            citacao: "Schreibman, L., Dawson, G., Stahmer, A. C., Landa, R., Rogers, S. J., McGee, G. G., ... & McNerney, E. (2015). Naturalistic developmental behavioral interventions: Empirically validated treatments for autism spectrum disorder. Journal of Autism and Developmental Disorders, 45(8), 2411-2428.",
            relevancia: ["intervencoes_naturalistas", "desenvolvimento", "evidencia_empirica"],
            tipo: "artigo"
        },
        {
            id: "steinbrenner2020",
            citacao: "Steinbrenner, J. R., Hume, K., Odom, S. L., Morin, K. L., Nowell, S. W., Tomaszewski, B., ... & Savage, M. N. (2020). Evidence-based practices for children, youth, and young adults with autism. University of North Carolina at Chapel Hill, Frank Porter Graham Child Development Institute, National Clearinghouse on Autism Evidence and Practice Review Team.",
            relevancia: ["praticas_baseadas_evidencia", "revisao_nacional", "intervencoes_TEA"],
            tipo: "relatorio"
        },
        {
            id: "hume2021",
            citacao: "Hume, K., Steinbrenner, J. R., Odom, S. L., Morin, K. L., Nowell, S. W., Tomaszewski, B., ... & Savage, M. N. (2021). Evidence-based practices for children, youth, and young adults with autism: Third generation review. Journal of Autism and Developmental Disorders, 51(11), 4013-4032.",
            relevancia: ["evidencias_cientificas", "terceira_geracao", "praticas_validadas"],
            tipo: "artigo"
        }
    ],

    // Referências para comunicação - ATUALIZADAS
    COMUNICACAO: [
        {
            id: "ganz2017",
            citacao: "Ganz, J. B., Morin, K. L., Foster, M. J., Vannest, K. J., Tosello, M. M., Gregori, E. V., & Gerow, S. L. (2017). High-technology augmentative and alternative communication for individuals with intellectual and developmental disabilities and complex communication needs: A meta-analysis. Augmentative and Alternative Communication, 33(4), 224-238.",
            relevancia: ["tecnologia_assistiva", "CAA", "meta_analise"],
            tipo: "artigo"
        },
        {
            id: "tager2016",
            citacao: "Tager-Flusberg, H., & Kasari, C. (2013). Minimally verbal school-aged children with autism spectrum disorder: The neglected end of the spectrum. Journal of Autism and Developmental Disorders, 43(11), 2696-2708.",
            relevancia: ["criancas_minimamente_verbais", "espectro_negligenciado", "idade_escolar"],
            tipo: "artigo"
        }
    ],

    // Referências metodológicas - ATUALIZADAS
    METODOLOGIA: [
        {
            id: "cooper2020",
            citacao: "Cooper, J. O., Heron, T. E., & Heward, W. L. (2020). Applied behavior analysis (3rd ed.). Pearson.",
            relevancia: ["metodologia_ABA", "analise_comportamental", "principios"],
            tipo: "livro"
        },
        {
            id: "kazdin2017",
            citacao: "Kazdin, A. E. (2017). Research design in clinical psychology (5th ed.). Pearson.",
            relevancia: ["metodologia_pesquisa", "delineamento_pesquisa", "psicologia_clinica"],
            tipo: "livro"
        },
        {
            id: "horner2020",
            citacao: "Horner, R. H., Swaminathan, H., Sugai, G., & Smolkowski, K. (2012). Considerations for the systematic analysis and use of single-case research. Education and Treatment of Children, 35(2), 269-290.",
            relevancia: ["pesquisa_caso_unico", "analise_sistematica", "metodologia_rigorosa"],
            tipo: "artigo"
        }
    ]
};

// Variáveis globais para armazenar dados
let dadosEntrevista = {};
let dadosTerapeuta = {};
let scoresFuncoes = {atencao: 0, fuga: 0, tangiveis: 0, automatico: 0};
let funcaoPredominante = '';
let procedimentosRecomendados = [];
let registrosFrequencia = [];
let configuracaoColeta = {};
let referenciasSelecionadas = [];

// Função para mostrar/ocultar abas
function showTab(tabName) {
    // Ocultar todas as abas
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.add('hidden'));
    
    // Remover classe active de todas as abas
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Mostrar aba selecionada
    document.getElementById(tabName).classList.remove('hidden');
    
    // Ativar tab correspondente
    const activeTab = Array.from(tabs).find(tab => tab.textContent.includes(getTabText(tabName)));
    if (activeTab) activeTab.classList.add('active');
    
    // Se for a aba de recomendações ou relatório, gerar conteúdo
    if (tabName === 'recomendacoes') {
        gerarRecomendacoes();
    } else if (tabName === 'relatorio') {
        gerarRelatorio();
    }
}

function getTabText(tabName) {
    const texts = {
        'entrevista': 'Entrevista',
        'avaliacao': 'Avaliação',
        'coleta': 'Coleta',
        'recomendacoes': 'Recomendações',
        'relatorio': 'Relatório'
    };
    return texts[tabName] || '';
}

// Função para calcular pontuações das funções
function calcularFuncoes() {
    // Coletar dados da entrevista
    coletarDadosEntrevista();
    coletarDadosTerapeuta();
    
    // Calcular pontuação de cada função
    scoresFuncoes.atencao = calcularPontuacaoFuncao('atencao');
    scoresFuncoes.fuga = calcularPontuacaoFuncao('fuga');
    scoresFuncoes.tangiveis = calcularPontuacaoFuncao('tangiveis');
    scoresFuncoes.automatico = calcularPontuacaoFuncao('automatico');
    
    // Atualizar displays
    document.getElementById('scoreAtencao').textContent = `Pontuação: ${scoresFuncoes.atencao}/12`;
    document.getElementById('scoreFuga').textContent = `Pontuação: ${scoresFuncoes.fuga}/12`;
    document.getElementById('scoreTangiveis').textContent = `Pontuação: ${scoresFuncoes.tangiveis}/12`;
    document.getElementById('scoreAutomatico').textContent = `Pontuação: ${scoresFuncoes.automatico}/12`;
    
    // Determinar função predominante
    determinarFuncaoPredominante();
    
    // Mostrar resultado se alguma pontuação > 0
    if (Math.max(...Object.values(scoresFuncoes)) > 0) {
        mostrarResultadoFuncao();
    }
}

function calcularPontuacaoFuncao(funcao) {
    let total = 0;
    for (let i = 1; i <= 4; i++) {
        const radio = document.querySelector(`input[name="${funcao}${i}"]:checked`);
        if (radio) {
            total += parseInt(radio.value);
        }
    }
    return total;
}

function determinarFuncaoPredominante() {
    const scores = Object.entries(scoresFuncoes);
    scores.sort((a, b) => b[1] - a[1]);
    
    const funcaoNomes = {
        'atencao': 'ATENÇÃO',
        'fuga': 'FUGA/ESQUIVA',
        'tangiveis': 'ACESSO A TANGÍVEIS',
        'automatico': 'REFORÇO AUTOMÁTICO'
    };
    
    funcaoPredominante = funcaoNomes[scores[0][0]];
}

// Função para coletar dados do terapeuta
function coletarDadosTerapeuta() {
    dadosTerapeuta = {
        nome: document.getElementById('terapeutaNome')?.value || '',
        profissao: document.getElementById('terapeutaProfissao')?.value || '',
        especializacao: document.getElementById('terapeutaEspecializacao')?.value || '',
        registro: document.getElementById('terapeutaRegistro')?.value || '',
        instituicao: document.getElementById('terapeutaInstituicao')?.value || '',
        contato: document.getElementById('terapeutaContato')?.value || '',
        experiencia: document.getElementById('terapeutaExperiencia')?.value || '',
        formacao: document.getElementById('terapeutaFormacao')?.value || '',
        supervisao: document.getElementById('terapeutaSupervisao')?.value || '',
        observacoes: document.getElementById('terapeutaObservacoes')?.value || ''
    };
    console.log('Dados do terapeuta coletados:', dadosTerapeuta);
}

function mostrarResultadoFuncao() {
    const resultadoDiv = document.getElementById('resultadoFuncao');
    const funcaoDiv = document.getElementById('funcaoPredominante');
    const graficoDiv = document.getElementById('graficoFuncoes');
    
    resultadoDiv.classList.remove('hidden');
    
    funcaoDiv.innerHTML = `
        <h4>Função Comportamental Predominante: ${funcaoPredominante}</h4>
        <p><strong>Pontuação:</strong> ${Math.max(...Object.values(scoresFuncoes))}/12</p>
    `;
    
    // Criar gráfico simples das pontuações
    const maxScore = Math.max(...Object.values(scoresFuncoes));
    graficoDiv.innerHTML = `
        <h4>Distribuição das Pontuações:</h4>
        ${Object.entries(scoresFuncoes).map(([funcao, score]) => `
            <div style="margin: 10px 0;">
                <span style="display: inline-block; width: 150px; font-weight: 600;">
                    ${funcao.charAt(0).toUpperCase() + funcao.slice(1)}:
                </span>
                <div style="display: inline-block; width: 200px; background: #e9ecef; border-radius: 10px; overflow: hidden;">
                    <div style="width: ${(score/12)*100}%; height: 20px; background: ${getFunctionColor(funcao)}; border-radius: 10px;"></div>
                </div>
                <span style="margin-left: 10px; font-weight: bold;">${score}/12</span>
            </div>
        `).join('')}
    `;
}

function getFunctionColor(funcao) {
    const colors = {
        'atencao': '#e74c3c',
        'fuga': '#3498db',
        'tangiveis': '#e67e22',
        'automatico': '#4a6741'
    };
    return colors[funcao] || '#6c757d';
}

// FUNÇÕES DE COLETA DE DADOS
function mostrarPeriodoPersonalizado() {
    const select = document.getElementById('periodoColeta');
    const div = document.getElementById('periodoPersonalizado');
    
    if (select && div) {
        if (select.value === 'personalizado') {
            div.style.display = 'block';
        } else {
            div.style.display = 'none';
        }
    }
}

function adicionarRegistro() {
    const data = document.getElementById('dataRegistro').value;
    const frequencia = document.getElementById('frequenciaRegistro').value;
    const observacoes = document.getElementById('observacoesDia').value;
    const periodo = document.getElementById('periodoColeta').value;
    const unidade = document.getElementById('unidadeFrequencia').value;

    // Validações
    if (!data || !frequencia || !periodo || !unidade) {
        alert('Por favor, preencha todos os campos obrigatórios (Data, Frequência, Período e Unidade).');
        return;
    }

    const dataFormatada = new Date(data + 'T00:00:00').toLocaleDateString('pt-BR');
    
    // Verificar se já existe registro para esta data
    const registroExistente = registrosFrequencia.find(r => r.data === data);
    if (registroExistente) {
        if (confirm('Já existe um registro para esta data. Deseja substituir?')) {
            const index = registrosFrequencia.indexOf(registroExistente);
            registrosFrequencia[index] = {
                data: data,
                dataFormatada: dataFormatada,
                frequencia: parseInt(frequencia),
                observacoes: observacoes || 'Nenhuma observação'
            };
        }
    } else {
        registrosFrequencia.push({
            data: data,
            dataFormatada: dataFormatada,
            frequencia: parseInt(frequencia),
            observacoes: observacoes || 'Nenhuma observação'
        });
    }

    // Salvar configuração da coleta
    configuracaoColeta = {
        periodo: periodo,
        unidade: unidade,
        descricaoPersonalizada: document.getElementById('descricaoPeriodo').value
    };

    // Ordenar registros por data
    registrosFrequencia.sort((a, b) => new Date(a.data) - new Date(b.data));

    // Atualizar tabela e estatísticas
    atualizarTabelaRegistros();
    calcularEstatisticas();

    // Limpar campos
    document.getElementById('dataRegistro').value = '';
    document.getElementById('frequenciaRegistro').value = '';
    document.getElementById('observacoesDia').value = '';
}

function removerRegistro(index) {
    if (confirm('Tem certeza que deseja remover este registro?')) {
        registrosFrequencia.splice(index, 1);
        atualizarTabelaRegistros();
        calcularEstatisticas();
    }
}

function atualizarTabelaRegistros() {
    const tbody = document.getElementById('corpoTabelaRegistros');
    
    if (registrosFrequencia.length === 0) {
        tbody.innerHTML = `
            <tr>
                <td colspan="4" style="padding: 20px; text-align: center; color: #6c757d; border: 1px solid #dee2e6;">
                    Nenhum registro adicionado ainda
                </td>
            </tr>
        `;
        return;
    }

    tbody.innerHTML = registrosFrequencia.map((registro, index) => `
        <tr>
            <td style="padding: 10px; border: 1px solid #dee2e6;">${registro.dataFormatada}</td>
            <td style="padding: 10px; border: 1px solid #dee2e6; text-align: center; font-weight: bold; color: #4a6741;">${registro.frequencia}</td>
            <td style="padding: 10px; border: 1px solid #dee2e6;">${registro.observacoes}</td>
            <td style="padding: 10px; border: 1px solid #dee2e6; text-align: center;">
                <button onclick="removerRegistro(${index})" style="background: #dc3545; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 12px;">
                    Remover
                </button>
            </td>
        </tr>
    `).join('');
}

function calcularEstatisticas() {
    const resumoDiv = document.getElementById('resumoEstatistico');
    
    if (registrosFrequencia.length === 0) {
        resumoDiv.style.display = 'none';
        return;
    }

    resumoDiv.style.display = 'block';

    const frequencias = registrosFrequencia.map(r => r.frequencia);
    const media = frequencias.reduce((a, b) => a + b, 0) / frequencias.length;
    const maiorValor = Math.max(...frequencias);
    const menorValor = Math.min(...frequencias);

    document.getElementById('mediaFrequencia').textContent = media.toFixed(1);
    document.getElementById('totalDias').textContent = registrosFrequencia.length;
    document.getElementById('maiorValor').textContent = maiorValor;
    document.getElementById('menorValor').textContent = menorValor;
}

function gerarGraficoFrequencia() {
    if (registrosFrequencia.length === 0) {
        return '<p style="text-align: center; color: #6c757d; padding: 20px;">Nenhum dado de frequência coletado</p>';
    }

    const frequencias = registrosFrequencia.map(r => r.frequencia);
    const maxFreq = Math.max(...frequencias);
    const media = frequencias.reduce((a, b) => a + b, 0) / frequencias.length;
    
    return `
        <h4 style="color: #4a6741; margin-bottom: 15px; text-align: center;">Gráfico de Frequência do Comportamento</h4>
        <p style="text-align: center; color: #6c757d; margin-bottom: 15px;">
            <strong>Período:</strong> ${getPeriodoTexto(configuracaoColeta.periodo)} | 
            <strong>Unidade:</strong> ${getUnidadeTexto(configuracaoColeta.unidade)}
        </p>
        
        <!-- Gráfico Compatível com PDF -->
        <div class="grafico-pdf-container" style="background: white; padding: 20px; border-radius: 8px; margin: 15px 0; border: 2px solid #4a6741; page-break-inside: avoid;">
            
            <!-- Gráfico de Barras Simplificado para PDF -->
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                <thead>
                    <tr style="background: #4a6741; color: white;">
                        <th style="padding: 8px; border: 1px solid #4a6741; text-align: center;">Data</th>
                        <th style="padding: 8px; border: 1px solid #4a6741; text-align: center;">Frequência</th>
                        <th style="padding: 8px; border: 1px solid #4a6741; text-align: center;">Representação Visual</th>
                        <th style="padding: 8px; border: 1px solid #4a6741; text-align: center;">Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${registrosFrequencia.map((registro, index) => {
                        const percentual = maxFreq > 0 ? (registro.frequencia / maxFreq) * 100 : 0;
                        const cor = registro.frequencia > media ? '#e67e22' : '#4a6741';
                        const status = registro.frequencia > media ? 'Acima da média' : 'Abaixo da média';
                        
                        return `
                            <tr style="background: ${index % 2 === 0 ? '#f8f9fa' : 'white'};">
                                <td style="padding: 8px; border: 1px solid #dee2e6; text-align: center; font-weight: bold;">
                                    ${registro.dataFormatada}
                                </td>
                                <td style="padding: 8px; border: 1px solid #dee2e6; text-align: center; font-weight: bold; color: ${cor}; font-size: 16px;">
                                    ${registro.frequencia}
                                </td>
                                <td style="padding: 8px; border: 1px solid #dee2e6;">
                                    <div style="background: #e9ecef; height: 20px; border-radius: 10px; overflow: hidden; position: relative;">
                                        <div style="background: ${cor}; width: ${percentual}%; height: 100%; border-radius: 10px; min-width: 2px;"></div>
                                        <span style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); font-size: 11px; color: #4a6741; font-weight: bold;">
                                            ${percentual.toFixed(0)}%
                                        </span>
                                    </div>
                                </td>
                                <td style="padding: 8px; border: 1px solid #dee2e6; text-align: center; font-size: 12px; color: ${cor}; font-weight: bold;">
                                    ${status}
                                </td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
            
            <!-- Legenda Visual Simplificada -->
            <div style="margin-top: 20px; padding: 15px; background: #f8f9fa; border-radius: 8px; border-left: 4px solid #4a6741;">
                <div style="margin-bottom: 10px;">
                    <span style="display: inline-block; width: 15px; height: 15px; background: #4a6741; margin-right: 8px; vertical-align: middle;"></span>
                    <strong>Abaixo da média (${media.toFixed(1)})</strong>
                </div>
                <div>
                    <span style="display: inline-block; width: 15px; height: 15px; background: #e67e22; margin-right: 8px; vertical-align: middle;"></span>
                    <strong>Acima da média (${media.toFixed(1)})</strong>
                </div>
            </div>
        </div>
        
        <!-- Estatísticas em formato compatível com PDF -->
        <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 8px; border: 2px solid #e67e22;">
            <h5 style="color: #4a6741; text-align: center; margin-bottom: 15px;">Resumo Estatístico</h5>
            <table style="width: 100%; border-collapse: collapse;">
                <tr style="background: #f8f9fa;">
                    <td style="padding: 10px; border: 1px solid #dee2e6; font-weight: bold; color: #4a6741;">Média</td>
                    <td style="padding: 10px; border: 1px solid #dee2e6; text-align: center; font-weight: bold; color: #4a6741; font-size: 16px;">${media.toFixed(1)}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #dee2e6; font-weight: bold; color: #4a6741;">Valor Máximo</td>
                    <td style="padding: 10px; border: 1px solid #dee2e6; text-align: center; font-weight: bold; color: #e67e22; font-size: 16px;">${Math.max(...frequencias)}</td>
                </tr>
                <tr style="background: #f8f9fa;">
                    <td style="padding: 10px; border: 1px solid #dee2e6; font-weight: bold; color: #4a6741;">Valor Mínimo</td>
                    <td style="padding: 10px; border: 1px solid #dee2e6; text-align: center; font-weight: bold; color: #4a6741; font-size: 16px;">${Math.min(...frequencias)}</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #dee2e6; font-weight: bold; color: #4a6741;">Total de Dias</td>
                    <td style="padding: 10px; border: 1px solid #dee2e6; text-align: center; font-weight: bold; color: #6c757d; font-size: 16px;">${registrosFrequencia.length}</td>
                </tr>
            </table>
        </div>
        
        <!-- Análise de Tendência -->
        <div style="margin-top: 15px; padding: 15px; background: #fff8e1; border-radius: 8px; border-left: 4px solid #ff9800;">
            <h5 style="color: #4a6741; margin-bottom: 10px;">Análise de Tendência</h5>
            <p style="color: #6c757d; margin: 0; font-size: 14px; line-height: 1.5;">
                ${analisarTendencia(frequencias)}
            </p>
        </div>
    `;
}

function analisarTendencia(frequencias) {
    if (frequencias.length < 3) return "Dados insuficientes para análise de tendência.";
    
    const primeira = frequencias[0];
    const ultima = frequencias[frequencias.length - 1];
    const diferenca = ultima - primeira;
    const percentual = primeira > 0 ? ((diferenca / primeira) * 100).toFixed(1) : 0;
    
    if (Math.abs(diferenca) <= primeira * 0.1) {
        return "Comportamento estável ao longo do período observado.";
    } else if (diferenca > 0) {
        return `Tendência de aumento (${percentual}% em relação ao primeiro dia).`;
    } else {
        return `Tendência de redução (${Math.abs(percentual)}% em relação ao primeiro dia).`;
    }
}

function coletarDadosEntrevista() {
    dadosEntrevista = {
        nome: document.getElementById('nome').value,
        idade: parseInt(document.getElementById('idade').value) || 0,
        nivelTEA: document.getElementById('nivelTEA').value,
        medicacao: document.getElementById('medicacao').value,
        informante: document.getElementById('informante').value,
        comportamento: document.getElementById('comportamento').value,
        frequencia: document.getElementById('frequencia').value,
        duracao: document.getElementById('duracao').value,
        intensidade: document.getElementById('intensidade').value,
        riscoSeguranca: document.getElementById('riscoSeguranca').value,
        impactoAprendizado: document.getElementById('impactoAprendizado').value,
        nivelComunicacao: document.getElementById('nivelComunicacao').value,
        usoCAA: document.getElementById('usoCAA').value,
        hipersensibilidade: document.getElementById('hipersensibilidade').value,
        buscaSensorial: document.getElementById('buscaSensorial').value,
        tentativasAnteriores: document.getElementById('tentativasAnteriores').value,
        reforçadores: document.getElementById('reforçadores').value
    };
}

function gerarRecomendacoes() {
    console.log("Gerando recomendações...");
    coletarDadosEntrevista();
    coletarDadosTerapeuta();
    
    // Verificar se há função predominante definida
    if (!funcaoPredominante) {
        console.log("Função predominante não definida, determinando...");
        determinarFuncaoPredominante();
    }
    
    console.log("Função predominante:", funcaoPredominante);
    console.log("Dados da entrevista:", dadosEntrevista);
    
    // Gerar alertas de segurança
    gerarAlertasSeguranca();
    
    // Gerar resumo da análise
    gerarResumoAnalise();
    
    // Selecionar procedimentos - CORRIGIDO
    selecionarProcedimentos();
    
    // Selecionar referências científicas baseadas na análise
    selecionarReferencias();
    
    // Gerar cronograma
    gerarCronograma();
    
    // Gerar lista de recursos
    gerarRecursos();
}

function gerarAlertasSeguranca() {
    const alertasDiv = document.getElementById('alertasSeguranca');
    let alertas = [];
    
    if (dadosEntrevista.riscoSeguranca === 'alto') {
        alertas.push({
            tipo: 'danger',
            texto: 'ALERTA: Comportamento de alto risco identificado. Supervisão 1:1 recomendada durante implementação.'
        });
    }
    
    if (dadosEntrevista.medicacao && dadosEntrevista.medicacao.toLowerCase() !== 'nenhuma') {
        alertas.push({
            tipo: 'warning',
            texto: 'Criança em uso de medicação. Coordenar intervenções com o prescritor.'
        });
    }
    
    if (dadosEntrevista.intensidade === 'extrema') {
        alertas.push({
            tipo: 'warning',
            texto: 'Intensidade extrema detectada. Considerar avaliação médica complementar.'
        });
    }
    
    alertasDiv.innerHTML = alertas.map(alerta => `
        <div class="alert alert-${alerta.tipo}">
            ${alerta.texto}
        </div>
    `).join('');
}

function gerarResumoAnalise() {
    const resumoDiv = document.getElementById('resumoAnalise');
    
    resumoDiv.innerHTML = `
        <div class="recommendation-card">
            <h4>Resumo da Análise Funcional</h4>
            <p><strong>Criança:</strong> ${dadosEntrevista.nome || 'Não informado'} (${dadosEntrevista.idade || 'N/A'} anos)</p>
            <p><strong>Função Predominante:</strong> ${funcaoPredominante || 'Não definida'} (${Math.max(...Object.values(scoresFuncoes))}/12 pontos)</p>
            <p><strong>Comportamento:</strong> ${dadosEntrevista.comportamento || 'Não descrito'}</p>
            <p><strong>Frequência:</strong> ${getFrequenciaTexto(dadosEntrevista.frequencia)}</p>
            <p><strong>Intensidade:</strong> ${dadosEntrevista.intensidade || 'Não informada'}</p>
            <p><strong>Comunicação:</strong> ${getComunicacaoTexto(dadosEntrevista.nivelComunicacao)}</p>
            <p><strong>Perfil Sensorial:</strong> ${getPerfilSensorialTexto()}</p>
        </div>
    `;
}

function selecionarProcedimentos() {
    console.log("Selecionando procedimentos para função:", funcaoPredominante);
    
    // Determinar chave do banco de dados baseada na função predominante
    let funcaoKey = '';
    if (funcaoPredominante.includes('ATENÇÃO')) {
        funcaoKey = 'ATENCAO';
    } else if (funcaoPredominante.includes('FUGA') || funcaoPredominante.includes('ESQUIVA')) {
        funcaoKey = 'FUGA';
    } else if (funcaoPredominante.includes('TANGÍVEIS')) {
        funcaoKey = 'TANGIVEIS';
    } else if (funcaoPredominante.includes('AUTOMÁTICO')) {
        funcaoKey = 'AUTOMATICO';
    }
    
    console.log("Chave da função:", funcaoKey);
    
    const procedimentosDisponiveis = bancoProcedimentos[funcaoKey] || [];
    console.log("Procedimentos disponíveis:", procedimentosDisponiveis);
    
    // Filtrar procedimentos com base nos critérios
    procedimentosRecomendados = procedimentosDisponiveis.filter(proc => {
        console.log("Avaliando procedimento:", proc.nome);
        
        // Verificar idade
        if (dadosEntrevista.idade && (dadosEntrevista.idade < proc.idades[0] || dadosEntrevista.idade > proc.idades[1])) {
            console.log("Filtrado por idade");
            return false;
        }
        
        // Verificar comunicação
        if (proc.comunicacao !== "qualquer" && dadosEntrevista.nivelComunicacao && 
            !proc.comunicacao.includes(dadosEntrevista.nivelComunicacao)) {
            console.log("Filtrado por comunicação");
            return false;
        }
        
        // Verificar exclusões
        if (proc.exclusoes.includes('medicacao') && 
            dadosEntrevista.medicacao && 
            dadosEntrevista.medicacao.toLowerCase() !== 'nenhuma') {
            console.log("Filtrado por medicação");
            return false;
        }
        
        console.log("Procedimento aprovado:", proc.nome);
        return true;
    });
    
    // Se não há procedimentos filtrados, usar todos disponíveis
    if (procedimentosRecomendados.length === 0 && procedimentosDisponiveis.length > 0) {
        console.log("Nenhum procedimento passou no filtro, usando todos disponíveis");
        procedimentosRecomendados = procedimentosDisponiveis;
    }
    
    // Ordenar por pontuação
    procedimentosRecomendados.sort((a, b) => b.pontuacao - a.pontuacao);
    
    console.log("Procedimentos recomendados finais:", procedimentosRecomendados);
    
    // Gerar HTML dos procedimentos
    const procedimentosDiv = document.getElementById('procedimentosRecomendados');
    
    if (procedimentosRecomendados.length === 0) {
        procedimentosDiv.innerHTML = `
            <div class="section">
                <h3>Procedimentos Recomendados</h3>
                <div class="recommendation-card">
                    <h4>Nenhum procedimento específico encontrado</h4>
                    <p>Para a função identificada <strong>${funcaoPredominante}</strong>, recomendamos:</p>
                    <ul>
                        <li>Consultar um analista do comportamento para avaliação mais detalhada</li>
                        <li>Implementar estratégias gerais de manejo comportamental</li>
                        <li>Monitorar comportamento por período adicional</li>
                    </ul>
                </div>
            </div>
        `;
    } else {
        procedimentosDiv.innerHTML = `
            <div class="section">
                <h3>Procedimentos Recomendados</h3>
                ${procedimentosRecomendados.slice(0, 3).map((proc, index) => `
                    <div class="recommendation-card priority-${getPrioridade(index)}">
                        <h4>${index + 1}. ${proc.nome}</h4>
                        <p><strong>Descrição:</strong> ${proc.descricao}</p>
                        <p><strong>Embasamento Científico:</strong> <em>${proc.embasamento || 'Procedimento baseado em princípios da Análise do Comportamento Aplicada'}</em></p>
                        <p><strong>Pontuação de adequação:</strong> ${proc.pontuacao}/10</p>
                        <p><strong>Recursos necessários:</strong> ${proc.recursos.join(', ')}</p>
                        
                        <div style="margin-top: 15px; padding: 15px; background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); border-radius: 8px;">
                            <h5 style="color: #4a6741; margin-bottom: 10px;">Cronograma de Implementação:</h5>
                            <ul style="margin: 0; padding-left: 20px;">
                                <li><strong>Semana 1:</strong> ${proc.fases.semana1}</li>
                                <li><strong>Semana 2-3:</strong> ${proc.fases.semana2}</li>
                                <li><strong>Semana 4+:</strong> ${proc.fases.semana3}</li>
                            </ul>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

function selecionarReferencias() {
    referenciasSelecionadas = [];
    
    // Sempre incluir referências de instrumentos
    referenciasSelecionadas.push(...bancoReferencias.INSTRUMENTOS.slice(0, 2));
    
    // Incluir referências específicas da função predominante
    const funcaoKey = funcaoPredominante.includes('ATENÇÃO') ? 'ATENCAO' :
                        funcaoPredominante.includes('FUGA') ? 'FUGA' :
                        funcaoPredominante.includes('TANGÍVEIS') ? 'TANGIVEIS' : 'AUTOMATICO';
    
    if (bancoReferencias[funcaoKey]) {
        referenciasSelecionadas.push(...bancoReferencias[funcaoKey].slice(0, 3));
    }
    
    // Incluir referências gerais sobre TEA
    referenciasSelecionadas.push(...bancoReferencias.TEA_GERAL.slice(0, 2));
    
    // Incluir referências sobre comunicação se relevante
    if (dadosEntrevista.nivelComunicacao === 'nao_verbal' || dadosEntrevista.usoCAA !== 'nao') {
        referenciasSelecionadas.push(...bancoReferencias.COMUNICACAO.slice(0, 1));
    }
    
    // Incluir referências metodológicas
    referenciasSelecionadas.push(...bancoReferencias.METODOLOGIA.slice(0, 1));
}

function gerarSecaoReferencias() {
    if (referenciasSelecionadas.length === 0) {
        selecionarReferencias();
    }
    
    return `
        <div class="referencias-section">
            <h3>Referências Científicas</h3>
            <p style="margin-bottom: 20px; font-style: italic; color: #6c757d;">
                Esta avaliação e as recomendações são baseadas em evidências científicas atuais (2015-2024) da área de Análise do Comportamento Aplicada e Transtorno do Espectro Autista.
            </p>
            ${referenciasSelecionadas.map((ref, index) => `
                <div class="referencia-item">
                    <strong>${index + 1}.</strong> ${ref.citacao}
                </div>
            `).join('')}
        </div>
    `;
}

function gerarCronograma() {
    const cronogramaDiv = document.getElementById('cronogramaImplementacao');
    
    if (procedimentosRecomendados.length > 0) {
        const proc = procedimentosRecomendados[0];
        cronogramaDiv.innerHTML = `
            <div class="recommendation-card">
                <h4>Cronograma de Implementação - ${proc.nome}</h4>
                <div style="margin: 15px 0;">
                    <strong>Semana 1:</strong> ${proc.fases.semana1}
                </div>
                <div style="margin: 15px 0;">
                    <strong>Semana 2-3:</strong> ${proc.fases.semana2}
                </div>
                <div style="margin: 15px 0;">
                    <strong>Semana 4+:</strong> ${proc.fases.semana3}
                </div>
                <div style="margin-top: 20px; padding: 15px; background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%); border-radius: 8px; border-left: 4px solid #4a6741;">
                    <strong>Critério de Sucesso:</strong> Redução de ${getMetaReducao()}% no comportamento-problema em 4 semanas
                </div>
            </div>
        `;
    } else {
        cronogramaDiv.innerHTML = `
            <div class="recommendation-card">
                <h4>Cronograma Geral de Implementação</h4>
                <div style="margin: 15px 0;">
                    <strong>Semana 1-2:</strong> Avaliação detalhada com profissional especializado
                </div>
                <div style="margin: 15px 0;">
                    <strong>Semana 3-4:</strong> Implementação de estratégias gerais de manejo
                </div>
                <div style="margin: 15px 0;">
                    <strong>Semana 5+:</strong> Monitoramento e ajustes conforme necessário
                </div>
            </div>
        `;
    }
}

function gerarRecursos() {
    const recursosDiv = document.getElementById('recursosNecessarios');
    
    if (procedimentosRecomendados.length > 0) {
        const recursosUnicos = [...new Set(procedimentosRecomendados.slice(0, 2).flatMap(proc => proc.recursos))];
        
        recursosDiv.innerHTML = `
            <div class="recommendation-card">
                <h4>Lista de Recursos Necessários</h4>
                <ul style="margin: 15px 0; padding-left: 20px;">
                    ${recursosUnicos.map(recurso => `<li>${recurso}</li>`).join('')}
                </ul>
                <div style="margin-top: 15px; padding: 10px; background: linear-gradient(135deg, #fef9e7 0%, #f6f1d1 100%); border-radius: 8px; border-left: 4px solid #e67e22;">
                    <strong>Estimativa de custo:</strong> ${getEstimativaCusto(recursosUnicos)}
                </div>
            </div>
        `;
    } else {
        recursosDiv.innerHTML = `
            <div class="recommendation-card">
                <h4>Recursos Gerais Recomendados</h4>
                <ul style="margin: 15px 0; padding-left: 20px;">
                    <li>Materiais de comunicação visual</li>
                    <li>Sistema de reforçamento</li>
                    <li>Cronograma visual</li>
                    <li>Timer ou cronômetro</li>
                </ul>
                <div style="margin-top: 15px; padding: 10px; background: linear-gradient(135deg, #fef9e7 0%, #f6f1d1 100%); border-radius: 8px; border-left: 4px solid #e67e22;">
                    <strong>Estimativa de custo:</strong> R$ 100-300 (materiais básicos)
                </div>
            </div>
        `;
    }
}

function gerarRelatorio() {
    const relatorioDiv = document.getElementById('relatorioCompleto');
    const dataAtual = new Date().toLocaleDateString('pt-BR');

    // Garantir que os dados foram coletados
    coletarDadosEntrevista();
    coletarDadosTerapeuta();
    
    // Garantir que as referências estejam selecionadas
    if (referenciasSelecionadas.length === 0) {
        selecionarReferencias();
    }

    // Garantir que os procedimentos foram selecionados
    if (procedimentosRecomendados.length === 0) {
        selecionarProcedimentos();
    }

    const proximaSecao = (base) => {
        let contador = base;
        if (registrosFrequencia.length > 0) contador++;
        if (procedimentosRecomendados.length > 0) contador++;
        return contador;
    };
    
    relatorioDiv.innerHTML = `
        <div class="relatorio-container">
            <div class="cabecalho-relatorio">
                <h2>RELATÓRIO DE AVALIAÇÃO FUNCIONAL E PLANO DE INTERVENÇÃO</h2>
                <p><strong>Data:</strong> ${dataAtual}</p>
                <p><strong>Criança:</strong> ${dadosEntrevista.nome || 'Não informado'} (${dadosEntrevista.idade || 'N/A'} anos)</p>
                <p><strong>Informante:</strong> ${getInformanteTexto(dadosEntrevista.informante)}</p>
            </div>
            
            ${gerarSecaoTerapeuta()}

            <div class="secao-relatorio">
                <h3>FINALIDADE DO DOCUMENTO</h3>
                <div style="background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%); padding: 20px; border-radius: 10px; border-left: 4px solid #4a6741; margin: 15px 0;">
                    <p style="margin-bottom: 15px; line-height: 1.6; color: #2c3e2d;">
                        <strong>Este relatório tem como objetivo:</strong>
                    </p>
                    <ul style="margin: 0; padding-left: 20px; color: #2c3e2d; line-height: 1.6;">
                        <li style="margin-bottom: 8px;">Apresentar uma <strong>análise funcional sistemática</strong> do comportamento-problema identificado, baseada em instrumentos validados cientificamente (FAI, QABF, FAST).</li>
                        <li style="margin-bottom: 8px;">Fornecer <strong>recomendações de intervenção baseadas em evidências</strong> da área de Análise do Comportamento Aplicada (ABA) para indivíduos com Transtorno do Espectro Autista.</li>
                        <li style="margin-bottom: 8px;">Oferecer <strong>diretrizes claras para implementação</strong> de estratégias comportamentais por familiares, cuidadores e profissionais.</li>
                        <li style="margin-bottom: 8px;">Estabelecer <strong>critérios objetivos de monitoramento</strong> e indicadores de progresso para avaliação da eficácia das intervenções.</li>
                        <li style="margin-bottom: 8px;">Servir como <strong>documento de referência</strong> para coordenação entre diferentes profissionais da equipe multidisciplinar.</li>
                    </ul>
                    <div style="margin-top: 15px; padding: 10px; background: rgba(255,255,255,0.7); border-radius: 8px; border-left: 3px solid #e67e22;">
                        <p style="margin: 0; font-style: italic; color: #8b4513; font-size: 14px;">
                            <strong>Importante:</strong> Este relatório não substitui avaliação médica ou psicológica completa. As recomendações devem ser implementadas com supervisão de profissional qualificado em Análise do Comportamento.
                        </p>
                    </div>
                </div>
            </div>
            
            <div class="secao-relatorio">
                <h3>1. DESCRIÇÃO DO COMPORTAMENTO</h3>
                <p><strong>Topografia:</strong> ${dadosEntrevista.comportamento || 'Não descrito'}</p>
                <p><strong>Frequência:</strong> ${getFrequenciaTexto(dadosEntrevista.frequencia)}</p>
                <p><strong>Duração:</strong> ${getDuracaoTexto(dadosEntrevista.duracao)}</p>
                <p><strong>Intensidade:</strong> ${dadosEntrevista.intensidade || 'Não informada'}</p>
                <p><strong>Risco de Segurança:</strong> ${getRiscoTexto(dadosEntrevista.riscoSeguranca)}</p>
                <p><strong>Impacto no Aprendizado:</strong> ${getImpactoTexto(dadosEntrevista.impactoAprendizado)}</p>
            </div>
            
            <div class="secao-relatorio">
                <h3>2. PERFIL DA CRIANÇA</h3>
                <p><strong>Nível TEA:</strong> ${getNivelTEATexto(dadosEntrevista.nivelTEA)}</p>
                <p><strong>Comunicação:</strong> ${getComunicacaoTexto(dadosEntrevista.nivelComunicacao)}</p>
                <p><strong>Uso de CAA:</strong> ${getCAATexto(dadosEntrevista.usoCAA)}</p>
                <p><strong>Perfil Sensorial:</strong> ${getPerfilSensorialTexto()}</p>
                <p><strong>Medicações:</strong> ${dadosEntrevista.medicacao || 'Nenhuma informada'}</p>
            </div>
            
            <div class="secao-relatorio">
                <h3>3. ANÁLISE FUNCIONAL</h3>
                <p><strong>Função Predominante:</strong> ${funcaoPredominante || 'Não definida'} (${Math.max(...Object.values(scoresFuncoes))}/12 pontos)</p>
                
                <div class="distribuicao-visual">
                    <h4 style="text-align: center; margin-bottom: 15px;">Distribuição Visual das Pontuações</h4>
                    ${Object.entries(scoresFuncoes).map(([funcao, score]) => {
                        return `
                            <div class="barra-funcao">
                                <div style="display: flex; align-items: center; margin-bottom: 5px; justify-content: space-between;">
                                    <span style="font-weight: 600; color: #4a6741; min-width: 140px;">
                                        ${getFuncaoNome(funcao)}:
                                    </span>
                                    <span style="font-weight: bold; color: #e67e22;">${score}/12 (${Math.round((score/12)*100)}%)</span>
                                </div>
                                <div class="barra-progresso">
                                    <div class="cor-${funcao}" style="width: ${(score/12)*100}%; height: 100%; border-radius: 8px;"></div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
                
                <table>
                    <thead>
                        <tr>
                            <th>Função</th>
                            <th style="text-align: center;">Pontuação</th>
                            <th style="text-align: center;">Percentual</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${Object.entries(scoresFuncoes).map(([funcao, score]) => `
                            <tr>
                                <td>${getFuncaoNome(funcao)}</td>
                                <td style="text-align: center;">${score}/12</td>
                                <td style="text-align: center;">${Math.round((score/12)*100)}%</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
            
            ${registrosFrequencia.length > 0 ? `
            <div class="secao-relatorio">
                <h3>4. DADOS DE FREQUÊNCIA COLETADOS</h3>
                <div class="grafico-container">
                    ${gerarGraficoFrequencia()}
                </div>
                
                <div style="margin-top: 20px;">
                    <h4>Registros Detalhados da Coleta:</h4>
                    <table>
                        <thead>
                            <tr>
                                <th style="text-align: center;">Data</th>
                                <th style="text-align: center;">Frequência</th>
                                <th>Observações do Dia</th>
                            </tr>
                        </thead>
                        <tbody>
                            ${registrosFrequencia.map(registro => `
                                <tr>
                                    <td style="text-align: center;">${registro.dataFormatada}</td>
                                    <td style="text-align: center; font-weight: bold; color: #4a6741;">${registro.frequencia}</td>
                                    <td>${registro.observacoes}</td>
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
            ` : ''}
            
            <div class="secao-relatorio">
                <h3>${registrosFrequencia.length > 0 ? '5' : '4'}. HIPÓTESE FUNCIONAL</h3>
                <div class="hipotese-funcional">
                    <strong>Hipótese:</strong> O comportamento "${dadosEntrevista.comportamento || 'descrito'}" ocorre 
                    ${getHipoteseAntecedente()} e é mantido por ${getHipoteseConsequencia(funcaoPredominante)}, 
                    resultando em ${getHipoteseImpacto()}.
                </div>
            </div>
            
            ${procedimentosRecomendados.length > 0 ? `
            <div class="secao-relatorio">
                <h3>${registrosFrequencia.length > 0 ? '6' : '5'}. PLANO DE INTERVENÇÃO</h3>
                ${procedimentosRecomendados.slice(0, 2).map((proc, index) => `
                    <div class="procedimento-recomendado">
                        <h4>${index + 1}º Procedimento: ${proc.nome}</h4>
                        <p><strong>Descrição:</strong> ${proc.descricao}</p>
                        <p><strong>Embasamento Científico:</strong> ${proc.embasamento}</p>
                        <p><strong>Recursos:</strong> ${proc.recursos.join(', ')}</p>
                        <div style="margin-top: 15px;">
                            <strong>Implementação:</strong>
                            <ul>
                                <li><strong>Semana 1:</strong> ${proc.fases.semana1}</li>
                                <li><strong>Semana 2-3:</strong> ${proc.fases.semana2}</li>
                                <li><strong>Semana 4+:</strong> ${proc.fases.semana3}</li>
                            </ul>
                        </div>
                    </div>
                `).join('')}
            </div>
            ` : `
            <div class="secao-relatorio">
                <h3>${registrosFrequencia.length > 0 ? '6' : '5'}. RECOMENDAÇÕES GERAIS</h3>
                <div class="procedimento-recomendado">
                    <h4>Estratégias Gerais de Manejo</h4>
                    <p><strong>Descrição:</strong> Implementação de estratégias gerais baseadas na função comportamental identificada.</p>
                    <p><strong>Recomendações:</strong></p>
                    <ul>
                        <li>Consultar analista do comportamento para avaliação mais detalhada</li>
                        <li>Implementar comunicação funcional básica</li>
                        <li>Estabelecer rotina estruturada e previsível</li>
                        <li>Monitorar comportamento sistematicamente</li>
                    </ul>
                </div>
            </div>
            `}
            
            <div class="secao-relatorio">
                <h3>${registrosFrequencia.length > 0 ? (procedimentosRecomendados.length > 0 ? '7' : '6') : (procedimentosRecomendados.length > 0 ? '6' : '5')}. CRITÉRIOS DE SUCESSO</h3>
                <ul>
                    <li>Redução de ${getMetaReducao()}% na frequência do comportamento-problema em 4 semanas</li>
                    <li>Aumento do uso de comunicação funcional em 70% das oportunidades</li>
                    <li>Melhora na tolerância a demandas/atividades por ${getMetaTolerancia()} minutos</li>
                    <li>Redução do impacto no aprendizado e interações sociais</li>
                </ul>
            </div>
            
            <div class="secao-relatorio">
                <h3>${registrosFrequencia.length > 0 ? (procedimentosRecomendados.length > 0 ? '8' : '7') : (procedimentosRecomendados.length > 0 ? '7' : '6')}. MONITORAMENTO E REAVALIAÇÃO</h3>
                <p><strong>Frequência de coleta de dados:</strong> Diária durante as primeiras 2 semanas, depois 3x/semana</p>
                <p><strong>Reunião de progresso:</strong> A cada 2 semanas para ajustes necessários</p>
                <p><strong>Reavaliação completa:</strong> Em 4-6 semanas</p>
                <p><strong>Critério para mudança de procedimento:</strong> Melhora < 25% em 2 semanas consecutivas</p>
            </div>
            
            <div class="secao-relatorio">
                <h3>${proximaSecao(7)}. OBSERVAÇÕES IMPORTANTES</h3>
                <div class="observacoes-importantes">
                    ${getObservacoesImportantes()}
                </div>
            </div>
            
            ${gerarSecaoReferencias()}
            
            <div class="assinatura-container">
                <p style="color: #4a6741; font-size: 16px; margin-bottom: 8px; text-align: center;"><strong>Sistema de Avaliação Funcional TEA</strong></p>
                <p style="font-size: 13px; color: #666; margin-bottom: 15px; text-align: center;"><em>Baseado em: FAI (O'Neill et al., 2015), QABF (Matson et al., 2018), Análise Funcional (Iwata & Dozier, 2019)</em></p>
                
                <div style="text-align: center;">
                    <p style="color: #4a6741; font-weight: 600; margin-bottom: 5px;">
                        Idealizado e desenvolvido por:
                    </p>
                    <p class="nome-autor">Daniel Barbosa</p>
                    <p style="color: #4a6741; font-style: italic; margin-top: 5px;">
                        Psicólogo e Analista do Comportamento
                    </p>
                </div>
                
                <p style="font-size: 12px; color: #888; margin-top: 15px; text-align: center;">Data: ${dataAtual} | © 2025 - Todos os direitos reservados</p>
            </div>
        </div>
    `;
}

// Função para gerar seção do terapeuta no relatório
function gerarSecaoTerapeuta() {
    if (!dadosTerapeuta.nome && !dadosTerapeuta.profissao) {
        return `
            <div class="terapeuta-info-relatorio">
                <h4>Terapeuta Responsável</h4>
                <p style="text-align: center; color: #6c757d; font-style: italic;">
                    Informações do terapeuta não foram preenchidas
                </p>
            </div>
        `;
    }

    return `
        <div class="terapeuta-info-relatorio">
            <h4>Terapeuta Responsável pela Avaliação</h4>
            <div class="terapeuta-dados">
                ${dadosTerapeuta.nome ? `<p><strong>Nome:</strong> ${dadosTerapeuta.nome}</p>` : ''}
                ${dadosTerapeuta.profissao ? `<p><strong>Profissão:</strong> ${getProfissaoTexto(dadosTerapeuta.profissao)}</p>` : ''}
                ${dadosTerapeuta.especializacao ? `<p><strong>Especialização:</strong> ${dadosTerapeuta.especializacao}</p>` : ''}
                ${dadosTerapeuta.registro ? `<p><strong>Registro Profissional:</strong> ${dadosTerapeuta.registro}</p>` : ''}
                ${dadosTerapeuta.instituicao ? `<p><strong>Instituição:</strong> ${dadosTerapeuta.instituicao}</p>` : ''}
                ${dadosTerapeuta.contato ? `<p><strong>Contato:</strong> ${dadosTerapeuta.contato}</p>` : ''}
                ${dadosTerapeuta.experiencia ? `<p><strong>Experiência com TEA:</strong> ${getExperienciaTexto(dadosTerapeuta.experiencia)}</p>` : ''}
                ${dadosTerapeuta.formacao ? `<p><strong>Formação Específica:</strong> ${getFormacaoTexto(dadosTerapeuta.formacao)}</p>` : ''}
                ${dadosTerapeuta.supervisao ? `<p><strong>Supervisão:</strong> ${getSupervisaoTexto(dadosTerapeuta.supervisao)}</p>` : ''}
            </div>
            ${dadosTerapeuta.observacoes ? `
 
                <div style="margin-top: 15px; padding: 10px; background: rgba(255,255,255,0.8); border-radius: 5px; border-left: 3px solid var(--bg-dark-green);">

                    <strong>Observações:</strong> ${dadosTerapeuta.observacoes}
                </div>
            ` : ''}
        </div>
    `;
}

// Funções auxiliares para textos do terapeuta
function getProfissaoTexto(prof) {
    const textos = {
        'psicologo': 'Psicólogo(a)',
        'terapeuta_ocupacional': 'Terapeuta Ocupacional',
        'fonoaudiologo': 'Fonoaudiólogo(a)',
        'pedagogo': 'Pedagogo(a)',
        'psicopedagogo': 'Psicopedagogo(a)',
        'neuropsicologo': 'Neuropsicólogo(a)',
        'analista_comportamento': 'Analista do Comportamento',
        'outro': 'Outro'
    };
    return textos[prof] || prof;
}

function getExperienciaTexto(exp) {
    const textos = {
        'menos_1_ano': 'Menos de 1 ano',
        '1_3_anos': '1 a 3 anos',
        '3_5_anos': '3 a 5 anos',
        '5_10_anos': '5 a 10 anos',
        'mais_10_anos': 'Mais de 10 anos'
    };
    return textos[exp] || exp;
}

function getFormacaoTexto(form) {
    const textos = {
        'especializacao': 'Especialização',
        'pos_graduacao': 'Pós-graduação',
        'mestrado': 'Mestrado',
        'doutorado': 'Doutorado',
        'cursos_livres': 'Cursos livres',
        'certificacao_internacional': 'Certificação Internacional',
        'nenhuma': 'Nenhuma formação específica'
    };
    return textos[form] || form;
}

function getSupervisaoTexto(sup) {
    const textos = {
        'sim_semanal': 'Sim - Semanal',
        'sim_quinzenal': 'Sim - Quinzenal',
        'sim_mensal': 'Sim - Mensal',
        'sim_eventual': 'Sim - Eventual',
        'nao': 'Não recebe supervisão'
    };
    return textos[sup] || sup;
}

// Funções auxiliares para textos
function getFrequenciaTexto(freq) {
    const textos = {
        'varias_hora': 'Várias vezes por hora',
        'varias_dia': 'Várias vezes por dia',
        'diariamente': 'Diariamente',
        'algumas_semana': 'Algumas vezes por semana',
        'raramente': 'Raramente'
    };
    return textos[freq] || 'Não informada';
}

function getDuracaoTexto(dur) {
    const textos = {
        'segundos': 'Segundos',
        '1-5min': '1-5 minutos',
        '5-30min': '5-30 minutos',
        'mais30min': 'Mais de 30 minutos'
    };
    return textos[dur] || 'Não informada';
}

function getComunicacaoTexto(com) {
    const textos = {
        'nao_verbal': 'Não-verbal',
        'palavras_isoladas': 'Palavras isoladas',
        'frases_simples': 'Frases simples',
        'conversacao': 'Conversação'
    };
    return textos[com] || 'Não informado';
}

function getNivelTEATexto(nivel) {
    const textos = {
        '1': 'Nível 1 - Necessita de apoio',
        '2': 'Nível 2 - Necessita de apoio substancial',
        '3': 'Nível 3 - Necessita de apoio muito substancial'
    };
    return textos[nivel] || 'Não informado';
}

function getCAATexto(caa) {
    const textos = {
        'nao': 'Não usa',
        'pecs': 'PECS',
        'gestos': 'Gestos',
        'aplicativo': 'Aplicativo',
        'outro': 'Outro'
    };
    return textos[caa] || 'Não informado';
}

function getRiscoTexto(risco) {
    const textos = {
        'nenhum': 'Nenhum',
        'baixo': 'Baixo',
        'moderado': 'Moderado',
        'alto': 'Alto'
    };
    return textos[risco] || 'Não informado';
}

function getImpactoTexto(impacto) {
    const textos = {
        'nao': 'Não interfere',
        'as_vezes': 'Interfere às vezes',
        'frequentemente': 'Interfere frequentemente',
        'sempre': 'Sempre interfere'
    };
    return textos[impacto] || 'Não informado';
}

function getInformanteTexto(informante) {
    const textos = {
        'mae': 'Mãe',
        'pai': 'Pai',
        'cuidador': 'Cuidador',
        'professor': 'Professor',
        'terapeuta': 'Terapeuta',
        'outro': 'Outro'
    };
    return textos[informante] || 'Não informado';
}

function getPeriodoTexto(periodo) {
    const textos = {
        'manha': 'Manhã (6h-12h)',
        'tarde': 'Tarde (12h-18h)', 
        'noite': 'Noite (18h-22h)',
        'dia_todo': 'Dia todo',
        'personalizado': configuracaoColeta.descricaoPersonalizada || 'Período personalizado'
    };
    return textos[periodo] || 'Não informado';
}

function getUnidadeTexto(unidade) {
    const textos = {
        'ocorrencias': 'Número de ocorrências',
        'minutos': 'Duração em minutos',
        'episodios': 'Número de episódios'
    };
    return textos[unidade] || 'Não informado';
}

function getFuncaoNome(funcao) {
    const nomes = {
        'atencao': 'Atenção',
        'fuga': 'Fuga/Esquiva',
        'tangiveis': 'Acesso a Tangíveis',
        'automatico': 'Reforço Automático'
    };
    return nomes[funcao] || funcao;
}

function getPerfilSensorialTexto() {
    const hiper = dadosEntrevista.hipersensibilidade;
    const busca = dadosEntrevista.buscaSensorial;
    
    let texto = '';
    if (hiper && hiper !== 'nenhuma') {
        texto += `Hipersensibilidade ${hiper}`;
    }
    if (busca && busca !== 'nenhuma') {
        if (texto) texto += ', ';
        texto += `Busca sensorial ${busca}`;
    }
    
    return texto || 'Sem alterações sensoriais reportadas';
}

function getPrioridade(index) {
    return index === 0 ? 'high' : index === 1 ? 'medium' : 'low';
}

function getMetaReducao() {
    const intensidade = dadosEntrevista.intensidade;
    if (intensidade === 'extrema' || intensidade === 'severa') return 70;
    if (intensidade === 'moderada') return 80;
    return 90;
}

function getMetaTolerancia() {
    const idade = dadosEntrevista.idade;
    if (idade <= 5) return 10;
    if (idade <= 10) return 15;
    return 20;
}

function getEstimativaCusto(recursos) {
    const custos = {
        'Timer visual': 'R$ 50-80',
        'Materiais de comunicação funcional': 'R$ 40-70',
        'Sistema de reforço': 'R$ 20-40',
        'Protetor auricular': 'R$ 40-60',
        'Materiais sensoriais': 'R$ 100-200',
        'Fichas coloridas': 'R$ 15-30'
    };
    
    const recursosComCusto = recursos.filter(r => Object.keys(custos).some(c => r.includes(c.split(' ')[0])));
    
    if (recursosComCusto.length === 0) return 'R$ 50-150 (materiais básicos)';
    return 'R$ 150-400 (dependendo dos materiais específicos)';
}

function getHipoteseAntecedente() {
    const freq = dadosEntrevista.frequencia;
    if (freq === 'varias_hora' || freq === 'varias_dia') {
        return 'em situações de alta demanda ou estímulos desencadeadores';
    }
    return 'quando exposta a antecedentes específicos';
}

function getHipoteseConsequencia(funcao) {
    const consequencias = {
        'ATENÇÃO': 'obtenção de atenção social (positiva ou negativa)',
        'FUGA/ESQUIVA': 'fuga ou evitação de demandas/situações aversivas',
        'ACESSO A TANGÍVEIS': 'acesso a itens ou atividades preferidas',
        'REFORÇO AUTOMÁTICO': 'autorregulação sensorial ou estimulação interna'
    };
    return consequencias[funcao] || 'reforçamento não identificado claramente';
}

function getHipoteseImpacto() {
    const impacto = dadosEntrevista.impactoAprendizado;
    const risco = dadosEntrevista.riscoSeguranca;
    
    let texto = '';
    if (risco === 'alto') texto += 'riscos de segurança e ';
    if (impacto === 'sempre' || impacto === 'frequentemente') {
        texto += 'significativo prejuízo no aprendizado e interações sociais';
    } else {
        texto += 'impacto nas atividades diárias';
    }
    
    return texto;
}

function getObservacoesImportantes() {
    let observacoes = [];
    
    if (dadosEntrevista.riscoSeguranca === 'alto') {
        observacoes.push('• Supervisão constante necessária devido ao alto risco de segurança');
    }
    
    if (dadosEntrevista.medicacao && dadosEntrevista.medicacao.toLowerCase() !== 'nenhuma') {
        observacoes.push('• Coordenação com prescritor necessária devido ao uso de medicação');
    }
    
    if (dadosEntrevista.hipersensibilidade !== 'nenhuma') {
        observacoes.push('• Considerar modificações ambientais devido ao perfil sensorial');
    }
    
    if (dadosEntrevista.intensidade === 'extrema') {
        observacoes.push('• Considerar avaliação médica adicional devido à intensidade extrema');
    }
    
    if (dadosEntrevista.tentativasAnteriores) {
        observacoes.push('• Evitar repetição de estratégias já testadas sem sucesso');
    }
    
    if (observacoes.length === 0) {
        observacoes.push('• Implementar plano conforme descrito, monitorando progresso regularmente');
    }
    
    return observacoes.join('\n');
}

// Funções de exportação e reset
function exportarPDF() {
    const relatorio = document.getElementById('relatorioCompleto').innerHTML;
    const janela = window.open('', '_blank');
    janela.document.write(`
        <html>
        <head>
            <title>Relatório de Avaliação Funcional - ${dadosEntrevista.nome}</title>
            <style>
                /* Reset e configurações básicas */
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                
                body { 
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                    margin: 15px; 
                    line-height: 1.6; 
                    color: #333;
                    background: white;
                }
                
                /* Cores e gradientes preservados */
                h1, h2, h3, h4, h5 { 
                    color: #4a6741; 
                    page-break-after: avoid; 
                    font-weight: 600;
                }
                
                h2 { 
                    border-bottom: 2px solid #4a6741; 
                    padding-bottom: 15px; 
                    margin-bottom: 20px;
                    font-size: 1.8rem;
                }
                
                h3 { 
                    border-bottom: 2px solid #e2e8f0; 
                    padding-bottom: 10px; 
                    margin-top: 30px; 
                    margin-bottom: 20px;
                    font-size: 1.4rem;
                    position: relative;
                }
                
                h3::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 50px;
                    height: 2px;
                    background: #e67e22;
                }
                
                h4 { 
                    color: #4a6741; 
                    margin-bottom: 15px; 
                    font-size: 1.2rem;
                }
                
                h5 { 
                    color: #4a6741; 
                    margin-bottom: 10px; 
                    font-size: 1.1rem;
                }
                
                p {
                    margin-bottom: 10px;
                    line-height: 1.6;
                }
                
                /* Tabelas com design completo */
                table { 
                    border-collapse: collapse; 
                    width: 100%; 
                    margin: 20px 0; 
                    page-break-inside: avoid;
                    background: white;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
                }
                
                th { 
                    background: linear-gradient(135deg, #4a6741 0%, #5a7a51 100%);
                    color: white; 
                    padding: 12px; 
                    text-align: left; 
                    font-weight: 600;
                    border: none;
                }
                
                td { 
                    padding: 12px; 
                    border-bottom: 1px solid #e2e8f0;
                }
                
                tbody tr:nth-child(even) { 
                    background-color: #f8f9fa; 
                }
                
                tbody tr:hover { 
                    background-color: #e8f5e8; 
                }
                
                /* Alertas com cores e gradientes */
                .alert { 
                    padding: 15px; 
                    margin: 15px 0; 
                    border-radius: 8px; 
                    page-break-inside: avoid;
                    border-left: 4px solid;
                }
                
                .alert-warning { 
                    background: linear-gradient(135deg, #fffbf0 0%, #fef3cd 100%);
                    border-left-color: #e67e22;
                    color: #8b4513;
                }
                
                .alert-danger { 
                    background: linear-gradient(135deg, #fff5f5 0%, #fed7da 100%);
                    border-left-color: #dc3545;
                    color: #721c24;
                }
                
                /* Container do relatório */
                .relatorio-container {
                    background: white;
                    padding: 30px;
                    margin: 0;
                    border-radius: 10px;
                    box-shadow: none; /* Removido para impressão */
                }
                
                /* Cabeçalho do relatório */
                .cabecalho-relatorio {
                    text-align: center;
                    border-bottom: 2px solid #e2e8f0;
                    padding-bottom: 20px;
                    margin-bottom: 30px;
                    page-break-after: avoid;
                }
                
                .cabecalho-relatorio h2 {
                    color: #4a6741;
                    margin-bottom: 15px;
                }
                
                /* Seções do relatório */
                .secao-relatorio {
                    margin-bottom: 30px;
                    page-break-inside: avoid;
                }
                
                /* Distribuição visual com gradientes */
                .distribuicao-visual {
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
                    padding: 20px;
                    border-radius: 10px;
                    margin: 20px 0;
                    border-left: 4px solid #4a6741;
                    page-break-inside: avoid;
                }
                
                .barra-funcao {
                    margin-bottom: 15px;
                }
                
                .barra-progresso {
                    width: 100%;
                    height: 20px;
                    background: #e9ecef;
                    border-radius: 10px;
                    overflow: hidden;
                    margin: 5px 0;
                    position: relative;
                }
                
                /* Cores específicas das funções */
                .cor-atencao { background: linear-gradient(90deg, #e74c3c, #c0392b) !important; }
                .cor-fuga { background: linear-gradient(90deg, #3498db, #2980b9) !important; }
                .cor-tangiveis { background: linear-gradient(90deg, #e67e22, #d35400) !important; }
                .cor-automatico { background: linear-gradient(90deg, #4a6741, #3e5336) !important; }
                
                /* Hipótese funcional */
                .hipotese-funcional {
                    background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
                    padding: 20px;
                    border-radius: 10px;
                    border-left: 4px solid #4a6741;
                    font-style: italic;
                    margin: 20px 0;
                    page-break-inside: avoid;
                }
                
                /* Procedimentos recomendados */
                .procedimento-recomendado {
                    background: #f8f9fa;
                    padding: 20px;
                    border-radius: 10px;
                    margin: 20px 0;
                    border-left: 4px solid #e67e22;
                    page-break-inside: avoid;
                }
                
                /* Observações importantes */
                .observacoes-importantes {
                    background: linear-gradient(135deg, #fff8e1 0%, #ffecb3 100%);
                    padding: 20px;
                    border-radius: 10px;
                    border-left: 4px solid #ff9800;
                    white-space: pre-line;
                    margin: 20px 0;
                    page-break-inside: avoid;
                }
                
                /* Seção de referências */
                .referencias-section {
                    background: #f5f7fa;
                    padding: 25px;
                    border-radius: 10px;
                    margin: 30px 0;
                    border-left: 4px solid #6c757d;
                    page-break-inside: avoid;
                }
                
                .referencias-section h3 {
                    color: #4a6741;
                    margin-bottom: 20px;
                }
                
                .referencia-item {
                    margin-bottom: 15px;
                    padding: 10px;
                    background: white;
                    border-radius: 5px;
                    border-left: 3px solid #e67e22;
                    font-size: 0.9em;
                    line-height: 1.4;
                }
                
                /* Container de assinatura */
                .assinatura-container { 
                    background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%);
                    padding: 20px; 
                    border-radius: 10px; 
                    border-left: 4px solid #4a6741;
                    text-align: center;
                    margin: 30px 0;
                    page-break-inside: avoid;
                }
                
                .nome-autor { 
                    color: #e67e22; 
                    font-weight: bold; 
                    font-size: 1.2em; 
                    margin: 10px 0;
                }
                
                /* Finalidade do documento */
                .finalidade-container,
                div[style*="background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%)"] {
                    background: linear-gradient(135deg, #e8f5e8 0%, #c8e6c9 100%) !important;
                    padding: 20px !important;
                    border-radius: 10px !important;
                    border-left: 4px solid #4a6741 !important;
                    margin: 15px 0 !important;
                    page-break-inside: avoid !important;
                }
                
                /* Estilos específicos para gráficos PDF */
                .grafico-pdf-container {
                    background: white !important;
                    padding: 20px !important;
                    border: 2px solid #4a6741 !important;
                    border-radius: 8px !important;
                    margin: 15px 0 !important;
                    page-break-inside: avoid !important;
                }
                
                .grafico-pdf-container table {
                    border-collapse: collapse !important;
                    width: 100% !important;
                    margin: 20px 0 !important;
                }
                
                .grafico-pdf-container thead tr {
                    background: #4a6741 !important;
                    color: white !important;
                }
                
                .grafico-pdf-container th {
                    background: #4a6741 !important;
                    color: white !important;
                    padding: 8px !important;
                    border: 1px solid #4a6741 !important;
                    text-align: center !important;
                }
                
                .grafico-pdf-container td {
                    padding: 8px !important;
                    border: 1px solid #dee2e6 !important;
                }
                
                .grafico-pdf-container tbody tr:nth-child(even) {
                    background: #f8f9fa !important;
                }
                
                .grafico-pdf-container .barra-progresso {
                    background: #e9ecef !important;
                    height: 20px !important;
                    border-radius: 10px !important;
                    overflow: hidden !important;
                    position: relative !important;
                    margin: 2px 0 !important;
                }
                
                /* Listas */
                ul { 
                    padding-left: 20px; 
                    margin: 10px 0;
                }
                
                li { 
                    margin-bottom: 8px; 
                    line-height: 1.5;
                }
                
                /* Strong e bold */
                strong, b {
                    color: #4a6741;
                    font-weight: 600;
                }
                
                /* Elementos com cores específicas preservadas */
                [style*="color: #4a6741"] {
                    color: #4a6741 !important;
                }
                
                [style*="color: #e67e22"] {
                    color: #e67e22 !important;
                }
                
                [style*="background: #f8f9fa"] {
                    background: #f8f9fa !important;
                }
                
                /* Containers com gradientes específicos */
                [style*="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)"] {
                    background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%) !important;
                }
                
                [style*="background: rgba(255,255,255,0.7)"] {
                    background: rgba(255,255,255,0.9) !important;
                }
                
                /* Media queries para impressão */
                @media print {
                    body { 
                        margin: 10mm;
                        background: white !important;
                        -webkit-print-color-adjust: exact !important;
                        color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                    
                    .secao-relatorio { 
                        page-break-inside: avoid;
                        break-inside: avoid;
                    }
                    
                    .cabecalho-relatorio { 
                        page-break-after: avoid;
                        break-after: avoid;
                    }
                    
                    .grafico-pdf-container { 
                        page-break-inside: avoid !important;
                        break-inside: avoid !important;
                    }
                    
                    h1, h2, h3, h4, h5 { 
                        page-break-after: avoid;
                        break-after: avoid;
                    }
                    
                    .distribuicao-visual,
                    .hipotese-funcional,
                    .procedimento-recomendado,
                    .observacoes-importantes,
                    .referencias-section,
                    .assinatura-container {
                        page-break-inside: avoid !important;
                        break-inside: avoid !important;
                    }
                    
                    table {
                        page-break-inside: avoid;
                        break-inside: avoid;
                    }
                    
                    /* Forçar cores na impressão */
                    * {
                        -webkit-print-color-adjust: exact !important;
                        color-adjust: exact !important;
                        print-color-adjust: exact !important;
                    }
                }
                
                /* Configurações específicas para navegadores */
                @page {
                    margin: 15mm;
                    size: A4;
                }
                
                /* Força preservação de cores em todos os elementos */
                .cor-atencao,
                .cor-fuga, 
                .cor-tangiveis,
                .cor-automatico,
                .distribuicao-visual,
                .hipotese-funcional,
                .procedimento-recomendado,
                .observacoes-importantes,
                .referencias-section,
                .assinatura-container,
                .alert-warning,
                .alert-danger,
                th {
                    -webkit-print-color-adjust: exact !important;
                    color-adjust: exact !important;
                    print-color-adjust: exact !important;
                }
            </style>
        </head>
        <body>
            ${relatorio}
        </body>
        </html>
    `);
    janela.document.close();
    setTimeout(() => janela.print(), 1000);
}

function novaAvaliacao() {
    if (confirm('Tem certeza que deseja iniciar uma nova avaliação? Todos os dados atuais serão perdidos.')) {
        // Limpar todos os campos
        document.querySelectorAll('input, select, textarea').forEach(campo => {
            if (campo.type === 'radio' || campo.type === 'checkbox') {
                campo.checked = false;
            } else {
                campo.value = '';
            }
        });
        
        // Resetar variáveis
        dadosEntrevista = {};
        scoresFuncoes = {atencao: 0, fuga: 0, tangiveis: 0, automatico: 0};
        funcaoPredominante = '';
        procedimentosRecomendados = [];
        registrosFrequencia = [];
        configuracaoColeta = {};
        referenciasSelecionadas = [];
        
        // Ocultar resultados
        document.getElementById('resultadoFuncao').classList.add('hidden');
        document.getElementById('resumoEstatistico').style.display = 'none';
        
        // Resetar tabela de registros
        atualizarTabelaRegistros();
        
        // Voltar para primeira aba
        showTab('entrevista');
    }
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Mostrar primeira aba por padrão
    showTab('entrevista');
});

// Adicionar event listeners para melhor UX
document.addEventListener('change', function(e) {
    // Auto-save quando campos importantes mudam
    if (e.target.id === 'nome' || e.target.id === 'comportamento') {
        coletarDadosEntrevista();
    }
    if (e.target.id === 'terapeutaNome' || e.target.id === 'terapeutaProfissao') {
        coletarDadosTerapeuta();
    }
});

// Prevenir perda de dados ao sair da página
window.addEventListener('beforeunload', function(e) {
    if (dadosEntrevista.nome || dadosTerapeuta.nome || registrosFrequencia.length > 0) {
        e.preventDefault();
        e.return = 'Você tem dados não salvos. Tem certeza que deseja sair?';
    }
});
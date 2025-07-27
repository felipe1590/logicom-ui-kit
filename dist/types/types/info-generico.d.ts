/**
 * Interface que representa as propriedades de informações genéricas
 * @property {string} titulo - Título das informações
 * @property {string} subtitulo - Subtítulo das informações
 * @property {string} descricao - Descrição das informações
 */
export type InfoGenericoProps = {
    titulo: string;
    subtitulo?: string;
    descricao?: string;
};

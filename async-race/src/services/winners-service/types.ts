export interface IWinnersService {
    getWinner(id: number): Promise<WinnerType | void>;
    createWinner(id: number, wins: number, time: number): Promise<void | {totalCount: string | null; data: WinnerType; }>;
    updateWinner(id: number, wins: number, time: number): Promise<void | {totalCount: string | null; data: WinnerType; }>;
    getWinners(page: number, limit: number, sort: 'time' | 'wins', order: 'ASC' | 'DESC'):
        Promise<void | {totalCount: string | null; data: WinnerType[]; }>;
    deleteWinner(id: number): void;
}

export type WinnerType = {
    wins: number;
    time: number;
    id: number;
}

import tipicoScrapeUrl from '@lib/api/scrapers/tipicoScrapeUrl';
import promisifyRequestsList from '@lib/utils/promisifyRequestsList';

/* Scraping Logik für Tipico */
export const scrapeData = async (): Promise<string[][]> => {
  /* TODO: Weitere Wettbewerbe hinzufügen */
  const urlList = [
    //europe
    'https://sports.tipico.de/de/alle/1101/1301', //eng, premier league
    'https://sports.tipico.de/de/alle/1101/31301', //fin, veikkausliiga
    'https://sports.tipico.de/de/alle/1101/527301', //fin, Ykkonen
    'https://sports.tipico.de/de/alle/1101/742110', //int(eur), Champions League
    'https://sports.tipico.de/de/alle/1101/79301', //irl, Premier Division
    'https://sports.tipico.de/de/alle/1101/718301', //irl, First Division
    'https://sports.tipico.de/de/alle/1101/5301', //nor, Eliteserien
    'https://sports.tipico.de/de/alle/1101/6301', //nor, 1. Division

    //asia
    'https://sports.tipico.de/de/alle/1101/82301', //jpn, J-League
    'https://sports.tipico.de/de/alle/1101/3034301', //jpn, J-League 2
    'https://sports.tipico.de/de/alle/1101/10327301', //jpn, J-League 3
    'https://sports.tipico.de/de/alle/1101/virtual_japanLeagueCupFootballAllGroupMatches', //jpn, J. league cup
    'https://sports.tipico.de/de/alle/1101/5126301', //jpn, Emperor cup
    'https://sports.tipico.de/de/alle/1101/3284301', //skor, K-League 1
    'https://sports.tipico.de/de/alle/1101/6230301', //skor, K-League 2
    'https://sports.tipico.de/de/alle/1101/93820301', //skor, K3 League

    //america
    'https://sports.tipico.de/de/alle/1101/68301', //arg, Liga Profesional de Futbol
    'https://sports.tipico.de/de/alle/1101/85016301', //arg, Primera B, Clausura
    'https://sports.tipico.de/de/alle/1101/37309301', //arg, Primera Nacional, Gruppe A
    'https://sports.tipico.de/de/alle/1101/37310301', //arg, Primera Nacional, Gruppe b
    'https://sports.tipico.de/de/alle/1101/83301', //bra, serie a
    'https://sports.tipico.de/de/alle/1101/1449301', //bra, serie b
    'https://sports.tipico.de/de/alle/1101/27213301', //bra, serie c, gruppe a
    'https://sports.tipico.de/de/alle/1101/81703301', //col, Primera A,  Apertura, Gruppe A
    'https://sports.tipico.de/de/alle/1101/81705301', //col, Primera A,  Apertura, Gruppe B
    'https://sports.tipico.de/de/alle/1101/652301', //chi, super league
    'https://sports.tipico.de/de/alle/1101/61476301', //chi,Primera B
    'https://sports.tipico.de/de/alle/1101/67280301', //chi, Primera Division
    'https://sports.tipico.de/de/alle/1101/16887301', //ecu, primera a
    'https://sports.tipico.de/de/alle/1101/77667301', //ecu, primera b
    'https://sports.tipico.de/de/alle/1101/13431301', //per, Segunda Division
    'https://sports.tipico.de/de/alle/1101/57777301', //uru, Primera Division, Intermedio, Gruppe A
    'https://sports.tipico.de/de/alle/1101/60005301', //uru, Primera Division, Intermedio, Gruppe B
    'https://sports.tipico.de/de/alle/1101/18301', //usa, MLS
    'https://sports.tipico.de/de/alle/1101/78360301', //usa, USL, Championship

    //africa

    //oceania
    'https://sports.tipico.de/de/alle/1101/10216301', //aus, NPL, Victoria
    'https://sports.tipico.de/de/alle/1101/31384301', //aus, NPL, South Australia
    'https://sports.tipico.de/de/alle/1101/31283301', //aus, NPL, Queensland
    'https://sports.tipico.de/de/alle/1101/31499301', //aus, NPL, Western Australia
    'https://sports.tipico.de/de/alle/1101/31281301', //aus, NPL, Capital Football
    'https://sports.tipico.de/de/alle/1101/31508301', //aus, NPL, Tasmania
    'https://sports.tipico.de/de/alle/1101/31378301', //aus, NPL, Northern NSW
    'https://sports.tipico.de/de/alle/1101/31300301', //aus, NPL, New South Wales
  ];

  try {
    return await promisifyRequestsList(urlList, tipicoScrapeUrl);
  } catch (e) {
    throw e;
  }
};

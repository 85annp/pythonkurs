# Ett litet dataset med fyra elever och fyra attribut
elever = {
    "namn":         ["Anna", "Björn", "Carla", "David"],
    "ålder":        [16, 17, 16, 18],
    "betyg":        [4.2, 3.5, 4.8, 2.9],     # snittbetyg 1-5
    "studietimmar": [12, 6, 15, 3],            # timmar per vecka
}

antal = len(elever["namn"])
print("Antal elever:", antal)

for i in range(antal):
    print(elever["namn"][i],
          "- ålder:", elever["ålder"][i],
          "- betyg:", elever["betyg"][i],
          "- studietimmar:", elever["studietimmar"][i])

medelbetyg = sum(elever["betyg"]) / antal
print("Medelbetyg:", round(medelbetyg, 2))

temperaturer = [12.4, 13.1, None, 11.8, 14.2, None, 13.5]

giltiga = [t for t in temperaturer if t is not None]
print("Endast giltiga värden:", giltiga)
print("Medeltemperatur (filtrerat):", round(sum(giltiga) / len(giltiga), 2))

medel = sum(giltiga) / len(giltiga)
imputerade = [t if t is not None else medel for t in temperaturer]
print("Efter imputation:", [round(t, 2) for t in imputerade])
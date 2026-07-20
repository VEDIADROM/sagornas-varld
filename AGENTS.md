# Codex-arbetsregler

## Modellrekommendation

- Inled varje implementation med en kort modellrekommendation och motivering.
- Rekommendera `gpt-5.6-terra` med låg eller medelhög resonemangsnivå för små, tydligt avgränsade ändringar, sökning och snabb granskning.
- Rekommendera `gpt-5.6-sol` med hög eller extra hög resonemangsnivå för tvetydiga, riskfyllda eller flerstegsuppgifter som kräver planering och omfattande verifiering.
- Om den aktiva huvudmodellen inte matchar rekommendationen, säg tydligt att användaren behöver välja modellen i Codex modellkontroll. Påstå aldrig att huvudmodellen har bytts automatiskt.
- När användaren uttryckligen tillåter eller begär underagenter, låt modell och resonemang vara opinnade när det är lämpligt så att Codex kan välja efter uppgiften. Pinna bara ett val när uppgiftens krav tydligt motiverar det.

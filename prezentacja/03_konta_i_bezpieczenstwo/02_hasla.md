# Hasła i ich przechowywanie

notes:
W dzisiejszych czasach posadanie skomplikowanych i różnych haseł jest podstawą bezpieczeństwa.
Hasła powinny być łatwe do zapamiętania ale skomplikowane na tyle aby ciężko było by je odgadnąć, hasła typu `123456` są najłatwiejsze do złamania w przypadku ręcznej próby zajmie to parę od paru minut do jednej próby a w przypadku programu do łamania haseł to zostanie ono złamane w ciągu milisekund.
Aktualnie dobre hasła mają między 14 a 16 znaków gdzie tekst nie zawiera informacji łatwych do przejęcia, takich jak imię i nazwikso plus data urodzenia.

# Hasła cykliczne

`StareHasło -> StareHasło1`

notes:
Często błędnie administratorzy narzucają na użytkowników zmianę haseł co określoną ilość dni co kończy się na tym że hasło typu `StareHasło` zmienia się na `StareHasło1` lub zapisywaniem haseł na kartce.

# Menadżer haseł

notes:
Większość problemów z hasłami może rozwiązać dobry menadżer haseł,
zadaniem menadżera haseł jest przechowywanie naszych haseł w bezpieczny sposób.
Hasła zapisane w ten sposób są chronione hasłem głównym dzięki czemu jedyne hasło jakie musimy zapamiętać jest hasło główne do naszego menadżera haseł.
Plik z hasłami możemy także przenosić między naszymi urządzeniami w postaci zabezpieczonej przez hasło dzięki czemu utrudnimy ich przejęcie.

# Płatne menadżery haseł

notes:
Jest wiele płatnych rozwiązań do przechowywania haseł w chmurze co oferuje wygodną synchronizację haseł między użądzeninami, lecz jest to rozwiązanie które wybrał bym jedynie jeśli było by to wymagane przez firmę głównie dla tego że wygoda tego rozwiązania jest jego największą wadą.
Rozwiązania chmurowe często są ofiarami ataków hakerskich co może powodować wyciek baz haseł, w przypadku otrzymania informacji o wycieku należy jak najszybciej zmienić wszystkie hasła przechowywane w takim menadżerze, zarówno hasło główne jak i inne hasła.
Rozwiązania chmurowe często oferują wtyczkę do przeglądarki aby pozwolić na auto uzupełnianie haseł na stronach internetowych, te wtyczki są często atakowane przez złośliwe strony internetowe które wykorzysstują błędy w programie, wynikiem czego jest kradzież odszyfrowanych haseł.

# Darmowe menadżery haseł.

`keepass.info`
`keepassxc.org`


notes:
Opensourceowe rozwiązania do przechowywania haseł są dobrą alternatywą do płatnych,
Często duże firmy i kraje finansują rozwój tych rozwiązań i oferują płatne nagrody dla tych którym uda się znaleźć wrażliwy kod który można było by wykorzystać w celu kradzieży haseł.
Takim rozwiązaniem jest KeePass, który pozwala na bezpieczne przechowywanie haseł oraz generowanie nowych silnych haseł które co prawda nie są łatwe do zapamiętania ale w połączeniu z menadżerem haseł nie stanowi to problemu.
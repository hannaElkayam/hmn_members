# hmn_members
npm i 

cd client 

npm start 

nodemon server.js 






חלק ב- אסטרטגיית איכות

1.הערות עבור מנהל המוצר:

-על איזה מערכות הפיצ'ר אמור לעבוד, רק למחשב או גם לפלאפון? באילו דפדפנים הוא יתמוך? באילו מכשירים הוא יתמוך?(אנדרואיד, אייפון, לינוקס, ווינדווס מאכ) 
-
בדרישת האיכון לפי תאריך,צריך להוסיף לאיכון משך זמן חפיפה בין הנדבק לסובבים אותו, אם אדם נחשף לחולה למשך כמה שניות מסתמא שלא נדבק, כמו כן אם שולחים תאריך סתמי בלי טווח השעות שבהן שהה הנדבק יכולים לאכן אנשים שהיו שם לפניו או אחריו, כמו כן צריך להחליט מהו משך פרק הזמן היוצר הדבקה

-דרישה שאי אפשר לעמוד בה: אם יש 2 דירות סמוכות, לא ניתן להבדיל בין האנשים ולכולם ישלח עידכון.
-צריך להוסיף לנ.צ קו גובה משום שאם האיכון בוצע על בניין רב קומות נרצה לאכן רק את האנשים ששהו בקומת הנדבק.
-צריך לתחום את הנ.צ שיהיו רק בשטחי המדינה.
2.מסמך בדיקות לפיצ'ר:
ראשית הייתי בודקת שהמערכת עובדת כמו שמצופה ממנה, כלומר: לאחר הזנת נ.צ ותאריך, כאשר לוחצים על צור בידוד אכן נשלחת בקשה מהUI לSERVER, והייתי בודקת שהSERVER קיבל את הקלטים בצורה תקינה, ועדכן את חברי הקופה הרלוונטים. נבדוק שכאשר סכמת הבקשה תקינה או לא מתקבל סטטוס מתאים (201 או 400 בהתאמה)
נבדוק מצד עמדה שכאשר לוחצים על צור בידוד בלי בחירת תאריך או מיקום יקפוץ הפופ אפ עם ההודעה המתאימה.
בדיקה נוספת - נבדוק שאדם שכבר חלה לא יעודכן למרות שאוכן , כי אפשר לחלות רק פעם אחת (כמצויין בסעיף א')
בדיקת עומסי הזנות על שרתים
בדיקה שכאשר בוחרים נ.צ של אזור שמם או אזור שאינו בשיטחנו אין שום עדכון, כלומר חוזר מערך רייק, או לחילופין המערכת לא נותנת לבחור נ.צ. כזה.
בדיקת עומסי הזנות על השרת
בדיקת זמן תגובה של המערכת
בדיקה שזה תומך בשרתים השונים לי דרישות מנהל הפרוייקט

![e995db59-f2d6-41b6-98b7-f61071e2985c](https://github.com/hannaElkayam/hmn_members/assets/107616389/a97a9c4a-082b-403e-8727-c4cb270f52a5)
![image](https://github.com/hannaElkayam/hmn_members/assets/107616389/c2a950a6-a407-4a63-bf1a-22b73c051203).


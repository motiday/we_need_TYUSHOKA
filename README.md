# we_need_TYUSHOKA

Code Abstractor
このモジュールは、与えられたJavaScriptのコードを抽象化する関数 abstractCode を提供します。

使用方法
const abstractedCode = abstractCode(code);
code は抽象化するJavaScriptのコード（文字列）です。

処理内容
変数名を var0, var1, … に置き換えます。
関数名を func0, func1, … に置き換えます。
関数の引数名を arg0, arg1, … に置き換えます。
文字列リテラルを str0, str1, … に置き換えます。
数値リテラルを num0, num1, … に置き換えます。
コメントは削除されます。
注意事項
このモジュールはJavaScriptのコード専用です。他の言語では動作しません。
